import asyncHandler from 'express-async-handler';
import BlogModel from '../models/Blog.model.js';

//* Add blog
export const addBlog = asyncHandler(async (req, res, next) => {
  const { title, description, category, tags } = req.body;

  let newBlog = await BlogModel.create({ title, description, category, tags });

  //   let newBlog = new BlogModel({ title, description, category, tags });
  //   let savedBlog = await newBlog.save();
  //   console.log("savedBlog: ", savedBlog);

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    payload: newBlog,
  });
});

export const getBlogs = asyncHandler(async (req, res, next) => {});

export const getBlog = asyncHandler(async (req, res, next) => {});