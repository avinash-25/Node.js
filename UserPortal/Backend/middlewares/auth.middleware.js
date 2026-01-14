import userModel from "../models/user.model.js";
import ErrorResponse from "../utils/ErrorResponse.utils.js";
import jwt from 'jwt';

export const authenticate = async (req, res, next) => {
    console.log(req.cookies);

    let token = req.cookies.token;
    if (!token) return next(new ErrorResponse("Please Login", 401));

    let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded token : ", decodedToken);

    let myUser = await userModel.findOne({ name: decodedToken });
    if (!myUser) return next(new ErrorResponse("Invalid session", 401));

    req.myUser = myUser;
    next();
    
}

// 403 : we cant access whatever you are login or not
// 401 : unt=authorized access