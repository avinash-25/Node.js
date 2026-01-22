import UserModel from "../models/user.model.js";
import { generateJwtToken } from "../utils/jwt.utils.js";
import bcrypt from "bcryptjs";

//* Register user
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const response = await UserModel.create({ name, email, password });

    if (!response) {
      return res.status(400).json({
        success: false,
        message: "Unsuccessful"
      });
    }

    res.status(201).json({
      success: true,
      message: "User registered successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error"
    });
  }
};


//* Login user

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({email});

    if (!existingUser) {
        return res.status(400).json({
            status: false,
            message: "Invalid credentials"
        });
    }
    // Avi@123

    let isMatched = await existingUser.comparePassword(password);
    if(!isMatched){
        return res.status(400).json({
            status: false,
            message: "Invalid credentials"
        });
    }

    console.log("You are logged in...!!");
    let token = generateJwtToken(existingUser.email);
    console.log(token);

    res.cookie("token", token, {
        maxAge: 10 * 60 * 1000, // 10 min
        secure: true
    });

    res.status(200).json({
    success: true,
    message: "User logged in",
    token,
  });
}
