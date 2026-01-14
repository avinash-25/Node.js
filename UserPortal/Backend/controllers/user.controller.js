import userModel from "../models/user.model.js";
import ErrorResponse from "../utils/ErrorResponse.utils.js";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { generateToken } from "../utils/jwt.utils.js";
import bcryptjs from 'bcryptjs';

//* Register user
export const register = asyncHandler(async (req, res, next) => {
        const { name, age, isMarried, email, password } = req.body;

        let salt = await bcryptjs.genSalt(10);
        let hashedPassword = await bcryptjs.hash(password, salt);

        let isMatched = await bcryptjs.compare(password, hashedPassword);


        const newUser = await userModel.create({ name, age, isMarried, email,  password }); // create method returns the data whatever we inserted.

        res.status(201).json({
            success: true,
            message: "User registered Successfully",
            data: newUser
        })
})

//* Get all user
export const getUsers = asyncHandler( async (req, res, next) => { 
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
export const getUser = asyncHandler( async (req, res, next) => {
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
export const updateUser = asyncHandler(async (req, res, next) => { 
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
export const deleteUser = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) throw new ErrorResponse("user not found", 404);

    res.status(200).json({
        success: true,
        message: "User deleted",
        data: deletedUser
        })
    })



//* login
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    let existinguser = await userModel.findOne({ email });

    if (!existinguser) throw new ErrorResponse("Invalid creendentials", 404);

    let isMatched = await bcryptjs.compare(password, existinguser.password);
    if(!isMatched)

    // let token = generateToken(existinguser);
    console.log(token)

    res.cookie("token", token, {
        maxAge: 10 * 60 * 1000, // 10 min in milliseconds (ms)
        secure: true // If true then not accessible to the browser
    });

    //? res.cookie("tokenName")

    res.status(200).json({
        success: true,
        message: "User Loggedin",
        token
    })
    
    //? sign(payload, secretKey, options)
})


//* logout
export const logout = asyncHandler((req, res, next) => {
    res.clearCookie();

    res.status(200).json({
        success: true,
        message: "User logged out"
    });
});

export const getProfile = asyncHandler((req, res, next) => {
    res.status(200).json({
        success: true,
        message: "User fetchhed successfully",
        data: req.myUser
   }) 
});

