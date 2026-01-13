import userModel from "../models/user.model.js";
import ErrorResponse from "../utils/ErrorResponse.utils.js";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

//* Register user
export const register = asyncHandler(
    async (req, res, next) => {
        const { name, age, isMarried, email, password } = req.body;
        const newUser = await userModel.create({ name, age, isMarried, email,  password }); // create method returns the data whatever we inserted.

        res.status(201).json({
            success: true,
            message: "User registered Successfully",
            data: newUser
        })
})

//* Get all user
export const getUsers = asyncHandler(
    async (req, res, next) => { 
        let allUsers = await userModel.find();
        if (allUsers.length == 0) {
            throw new ErrorResponse("No users Found", 404);
        }
        res.status(200).json({
            success: true,
            message: "Users Fetched Successfully",
            data: allUsers
        })
})

//* Get single User
export const getUser = asyncHandler(
    async (req, res, next) => {
       const userId = req.params.id;
     let user = await userModel.findOne({ _id: userId });
     
     if (!user) throw new ErrorResponse("user not found", 404);

    res.status(200).json({
        success: true,
        message: "User Fetched",
        data: user
    })
 })

//* Update single user
export const updateUser = asyncHandler(
    async (req, res, next) => { 
        let userId = req.params.id;

        let updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {new: true, runValidators: true});

        if (!updatedUser) throw new ErrorResponse("user not found", 404);

        res.status(200).json({
        success: true,
        message: "User Updated",
        data: updatedUser
        })
    })

//* Delete user
export const deleteUser = asyncHandler(
    async (req, res, next) => {
    const userId = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) throw new ErrorResponse("user not found", 404);

    res.status(200).json({
        success: true,
        message: "User deleted",
        data: deletedUser
        })
    })
 

