import asyncHandler from "express-async-handler";
import BlogModel from "../models/Blog.model.js";
import UserModel from "../models/user.model.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.util.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";

// export const addImage = asyncHandler(async (req, res, next) => {
//   return { secure_url };
// });

export const addBlog = asyncHandler(async (req, res, next) => {
  const { title, description, category, tags } = req.body;
  const userId = req.myUser._id;
  let secure_url = "";
  let public_id = "";
  if (req.file) {
    let resp = await uploadImage(req?.file?.path);
    console.log("resp: ", resp);
    secure_url = resp?.secure_url;
    public_id = resp?.public_id;
  }

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
  //   console.log("savedBlog: ", savedBlog);

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    payload: newBlog,
  });
});

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

export const updateImage = asyncHandler(async (req, res, next) => {
  let blogId = req.params.id;
  let userId = req.myUser._id;

  let blog = await BlogModel.findOne({ _id: blogId, createdBy: userId }); // filter

  let oldPublicId = blog?.image?.public_id;

  if (!blog) return next(new ErrorResponse("Blog not found", 404));

  //! new image ---> upload
  let path = req?.file?.path;
  let { secure_url, public_id } = await uploadImage(path);

  blog.image.secure_url = secure_url;
  blog.image.public_id = public_id;

  await blog.save();
  console.log("after uploading");
  let result = await deleteImage(oldPublicId);
  console.log("result: ", result);

  res.status(200).json({});
});
