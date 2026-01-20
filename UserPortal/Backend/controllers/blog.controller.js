import asyncHandler from 'express-async-handler';
import BlogModel from '../models/Blog.model.js';
import ErrorResponse from '../utils/ErrorResponse.utils.js';
import { uploadImage } from '../utils/cloudinary.utils.js';


export const addImage = asyncHandler(async (req,res,next) =>{})


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