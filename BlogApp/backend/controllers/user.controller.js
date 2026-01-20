import asyncHandler from "express-async-handler";
import UserModel from "../models/User.model.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";
import { generateJwtToken } from "../utils/jwt.util.js";

export const register = asyncHandler(async (req, res, next) => {
  // console.log(resp);
  // return res.status(200).json(resp);

  const { name, age, email, isMarried, password } = req.body;

  // let salt = await bcryptjs.genSalt(10);
  // let hashedPassword = await bcryptjs.hash(password, salt);
  // //? this is a one way hashing

  let newUser = await UserModel.create({
    name,
    age,
    email,
    isMarried,
    password /* : hashedPassword, */,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

export const getUsers = async (req, res, next) => {
  try {
    let allUsers = await UserModel.find();
    if (allUsers.length === 0) {
      // return res.status(404).json({
      //   success: false,
      //   message: "No users found",
      // });
      // throw new Error("No users found!!!!");
      // new ErrorResponse("msg", 404)
      throw new ErrorResponse("No users found", 404);
      // {message: "No users found", statusCode: 404}
    }

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      count: allUsers.length,
      data: allUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    // let user = await UserModel.findOne({ _id: userId });
    let user = await UserModel.findById(userId);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//* Update user
export const updateUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true, // display the updated document
      runValidators: true, // to validate the updated data
    });

    if (!updatedUser)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  let userId = req.params.id;
  let deletedUser = await UserModel.findByIdAndDelete(userId);

  if (!deletedUser)
    return res.status(404).json({
      success: false,
      message: "No user found",
    });

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser,
  });
};

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser = await UserModel.findOne({ email });
  if (!existingUser) throw new ErrorResponse("Invalid Credentials", 404);

  // let isMatched = await bcryptjs.compare(password, existingUser.password);
  let isMatched = await existingUser.comparePassword(password);
  if (!isMatched) return next(new ErrorResponse("Invalid credentials", 400));

  let token = generateJwtToken(existingUser.name);
  console.log("token: ", token);

  res.cookie("token", token, {
    maxAge: 10 * 60 * 1000, // 10 mins (in ms) , this sets an expiry for the token on the browser
    secure: true, // if set to true, this cannot be accessed in the browser (using js)
  });
  //? res.cookie("tokenName", "value", {options}); this will send cookies to the client's browser

  res.status(200).json({
    success: true,
    message: "User logged in",
    token,
  });

  //? sign(payload, secret_key, options)
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
    /* TODO:  
    ! will be using while deploying --> options
    */
  });

  res.status(200).json({
    success: true,
    message: "User logged out",
  });
});

export const getProfile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Profile fetched successfully",
    data: req.myUser,
  });
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  // req.myUser
});

export const deleteProfile = asyncHandler(async (req, res, next) => {
  // req.myUser
});

// u1
// u2 -> logged in
// u3
// u4
