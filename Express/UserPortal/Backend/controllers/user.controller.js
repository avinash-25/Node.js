import userModel from "../models/user.model.js";
import ErrorResponse from "../utils/ErrorResponse.utils.js";

//* Register user
export const register = async (req,res, next) => {
    try {
        const { name, age, isMarried, email, password } = req.body;
        const newUser = await userModel.create({ name, age, isMarried, email,  password }); // create method returns the data whatever we inserted.

        res.status(201).json({
            success: true,
            message: "User registered Successfully",
            data: newUser
        })
        } catch (error) {
            next(error);
        }
};

//* Get all user
export const getUsers = async (req, res, next) => { 
    try {
        let allUsers = await userModel.find();
        if (allUsers.length == 0) {
            throw new ErrorResponse("No users Found", 404);
        }
        res.status(200).json({
            success: true,
            message: "Users Fetched Successfully",
            data: allUsers
        })
    } catch (error) {
        next(error);
    }
};

//* Get single User
export const getUser = async (req, res, next) => {
 try {
       const userId = req.params.id;
     let user = await userModel.findOne({ _id: userId });
     
     if (!user) throw new ErrorResponse("user not found", 404);

    res.status(200).json({
        success: true,
        message: "User Fetched",
        data: user
    })
 } catch (error) {
     next(error);
 }

 };

//* Update single user
export const updateUser = async (req, res, next) => { 
    try {
        let userId = req.params.id;

        let updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {new: true, runValidators: true});

        if (!updatedUser) throw new ErrorResponse("user not found", 404);

        res.status(200).json({
        success: true,
        message: "User Updated",
        data: updatedUser
    })

    } catch (error) {
        next(error);
    }
};

//* Delete user
export const deleteUser = async (req, res, next) => {
    try {
    const userId = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) throw new ErrorResponse("user not found", 404);

    res.status(200).json({
        success: true,
        message: "User deleted",
        data: deletedUser
        })
    } catch (error) {
        next(error)
    }
 };