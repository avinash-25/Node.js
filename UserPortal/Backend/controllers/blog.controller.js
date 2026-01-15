import asyncHandler from 'express-async-handler';
import BlogModel from '../models/Blog.model.js';
import ErrorResponse from '../utils/ErrorResponse.utils.js';

//* Add blog
export const addBlog = asyncHandler(async (req, res, next) => {
    console.log(req.file);
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


/* 
{
  fieldname: 'image',
  originalname: 'user-2.jpg',       
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './public/temp',     
  filename: '1768463322202----user-2.jpg',
  path: 'public\\temp\\1768463322202----user-2.jpg',
  size: 5418
}

*/



//* get all blogs
export const getBlogs = asyncHandler(async (req, res, next) => {
  let blog = await BlogModel.find();
  if (blog.length == 0) throw new ErrorResponse("No users found", 404);
  
  res.status(200).json({
    success: true,
    message: "All users fetched",
    payload: blog
  })
});


//* get single blog
export const getBlog = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  
  if (!blogId) throw new ErrorResponse("Invalid id", 404);

  const blog = await BlogModel.findById(blogId);

  res.status(200).json({
    success: true,
    message: "Successfully fetched",
    blog: blog
  })
});