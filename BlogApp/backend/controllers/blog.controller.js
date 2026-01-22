import asyncHandler from "express-async-handler";
import BlogModel from "../models/Blog.model.js";
import UserModel from "../models/User.model.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.util.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";
import { generateBlogDescription } from "../utils/gemini.util.js";

// export const addImage = asyncHandler(async (req, res, next) => {
//   return { secure_url };
// });

//* get url of image
const getDataURL = (bufferValue, mimetype) => {
  const b64 = bufferValue.toString("base64");
  return `data:${mimetype};base64,${b64}`;
};

//* Add blog
export const addBlog = asyncHandler(async (req, res, next) => {
  const { title, description, category, tags } = req.body;
  const userId = req.myUser._id;

  let secure_url = "";
  let public_id = "";

  if (req.file) {
    let dataURL = getDataURL(req.file.buffer, req.file.mimetype);

    let uploadedImage = await uploadImage(dataURL);
    if (uploadedImage) {
      secure_url = uploadedImage.secure_url;
      public_id = uploadedImage.public_id;
    }
  }

  // if (req.file) {
  //   let resp = await uploadImage(req?.file?.path);
  //
  //   secure_url = resp?.secure_url;
  //   public_id = resp?.public_id;
  // }

  let newBlog = await BlogModel.create({
    title,
    description,
    category,
    tags,
    image: { secure_url, public_id },
    createdBy: userId,
  });

  await UserModel.updateOne(
    { _id: userId },
    {
      $inc: { totalBlogs: 1 },
    },
  );

  await UserModel.updateOne(
    { _id: userId },
    { $push: { blogs: { blogId: newBlog._id } } },
  );

  //   let newBlog = new BlogModel({ title, description, category, tags });
  //   let savedBlog = await newBlog.save();
  //

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    payload: newBlog,
  });
});


//* get all blogs
export const getBlogs = asyncHandler(async (req, res, next) => {
  // let blogs = await BlogModel.find();

  let blogs = await BlogModel.find().populate({
    path: "createdBy",
    select: "email name -_id", //? "name -_id"
  });

  // let blogs = await BlogModel.aggregate([
  //   {
  //     $lookup: {
  //       from: "users",
  //       foreignField: "_id",
  //       localField: "createdBy",
  //       as: "createdBy",
  //     },
  //   },
  //   {
  //     $project: {
  //       "createdBy.email": 1,
  //       title: 1,
  //       description: 1,
  //     },
  //   },
  // ]);

  if (blogs.length === 0) return next(new ErrorResponse("No Blogs found", 404));

  res.status(200).json({
    success: true,
    message: "Blogs fetched successfully",
    count: blogs.length,
    data: blogs,
  });
});


//* Get single blog
export const getBlog = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;

  const blog = await BlogModel.findById(blogId).populate({
    path: "createdBy",
    select: "email name -_id", //? "name -_id"
  });
  // const blog = await BlogModel.findById(blogId).populate("createdBy");

  if (!blog) return next(new ErrorResponse("Blog not found", 404));

  res.status(200).json({
    success: true,
    message: "Blog fetched successfully",
    payload: blog,
  });
});


//* Update blog
export const updateBlogDetails = asyncHandler(async (req, res, next) => {
  let userId = req.myUser._id;
  let blogId = req.params.id;

  let blog = await BlogModel.findOneAndUpdate(
    { _id: blogId, createdBy: userId }, // filter
    req.body, // updation value
    {
      new: true,
      runValidators: true, // options
    },
  );

  if (!blog) return next(new ErrorResponse("Blog not found", 404));

  res.status(200).json({
    success: true,
    message: "Blog updated successfully",
    payload: blog,
  });
});


//* Update image of a blog
export const updateImage = asyncHandler(async (req, res, next) => {
  let blogId = req.params.id;
  let userId = req.myUser._id;

  let blog = await BlogModel.findOne({ _id: blogId, createdBy: userId }); // filter
  if (!blog) return next(new ErrorResponse("Blog not found", 404));

  let oldPublicId = blog?.image?.public_id;

  //! new image ---> upload
  // let path = req?.file?.path;
  // let { secure_url, public_id } = await uploadImage(path);

  let secure_url = "";
  let public_id = "";

  if (req.file) {
    let dataURL = getDataURL(req.file.buffer, req.file.mimetype);

    let uploadedImage = await uploadImage(dataURL);
    if (uploadedImage) {
      secure_url = uploadedImage.secure_url;
      public_id = uploadedImage.public_id;
    }
  }

  blog.image.secure_url = secure_url;
  blog.image.public_id = public_id;

  await blog.save();
  console.log("blog: ", blog);

  console.log("oldPublicId: ", oldPublicId);
  await deleteImage(oldPublicId);

  res.status(200).json({
    success: true,
    message: "Image updated Successfully",
  });
});


//* Delete blog
export const deleteBlogImage = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const userId = req.myUser._id;

  let blog = await BlogModel.findOne({ _id: blogId, createdBy: userId });
  if (!blog) return next(new ErrorResponse("Blog Not Found!!!", 404));

  let imageId = blog.image.public_id;

  let resp = await deleteImage(imageId);
  if (resp.result == "ok") {
    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } else {
    res.status(200).json({
      success: false,
      message: "Image not deleted",
    });
  }
});



// https://github.com/Wolfgang281/TypeIT-BlogApp


//! google ai studio >> get an api key >> create api key >> create a variable in .env and paste the api key
// ? then install npm install @google/genai

//* Generate Description of a blog using gemini
export const generateDescription = asyncHandler(async (req, res, next) => {
  const { title } = req.body;

  const description = await generateBlogDescription(title);

  res.json({
    success: true,
    message: "Description generated successfully",
    description,
  });
});