import asyncHandler from 'express-async-handler';
import BlogModel from '../models/Blog.model.js';
import { json } from 'express';

export const addBlog = asyncHandler( async (req, res, next) => {
    const { title, description, category, tags } = req.body;

    let newBlog = await BlogModel.create({ title, description, category, tags });

    // let newBlog = new BlogModel({ title, description, category, tags });
    // let savedBlog = newBlog.save(); // this will internally call pre-hook
    // console.log("Saved Blog : ", newBlog);

    res.status(200), json({
        success: true,
        messgae: "User added successfully",
        payload: newBlog
    })
})