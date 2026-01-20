import asyncHandler from "express-async-handler";
import BlogModel from "../models/Blog.model.js";
import UserModel from "../models/user.model.js";
import { uploadImage } from "../utils/cloudinary.util.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";

// export const addImage = asyncHandler(async (req, res, next) => {
//   return { secure_url };
// });

//* Add blog

export const addBlog = asyncHandler(async (req, res, next) => {
  const { title, description, category, tags } = req.body;
  const userId = req.myUser._id;
  let secure_url = "";
  if (req.file) {
    let resp = await uploadImage(req?.file?.path);
    secure_url = resp?.secure_url;
  }

  let newBlog = await BlogModel.create({
    title,
    description,
    category,
    tags,
    image: secure_url || "",
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


//* Gte all blogs

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
export const getBlog = asyncHandler(async (req, res, next) => { });


//* Update the blog
export const updateBlog = asyncHandler(async (req, res, next) => {});