
import ErrorResponse from "../utils/ErrorResponse.utils.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index.js";
import UserModel from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token)
    return next(new ErrorResponse("Please Login to access this resource", 401)); //? unauthorized

  let decodedToken = jwt.verify(token, JWT_SECRET_KEY);
  console.log("decodedToken: ", decodedToken); //? {iat:, exp:, id:"12bytes"}

  let user = await UserModel.findOne({ name: decodedToken.name });
  if (!user) return next(new ErrorResponse("Invalid Session", 401));
  

  req.myUser = user;
  next();
};

//! encryption, encoding, signing(data integrity)

// 403 : we cant access whatever you are login or not
// 401 : unt=authorized access