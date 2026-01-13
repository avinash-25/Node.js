import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import userModel from '../models/user.model.js';

//* Login
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    let existinguser = await userModel.findOne({ email });

    if (!existinguser) throw new ErrorResponse("Invalid creendentials", 404);
    if (password != existinguser.password) next(new ErrorResponse("Invalid creendentials", 404));

    let token = jwt.sign({ payKey: existinguser.name }, "secret");
    console.log(token)

    res.status(200).json({
        success: true,
        message: "User Loggedin",
        token
    })
    
    //? sign(payload, secretKey, options)
})