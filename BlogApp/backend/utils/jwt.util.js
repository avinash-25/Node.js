import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index.js";

export const generateJwtToken = (name) => {
  return jwt.sign({ name }, JWT_SECRET_KEY, { expiresIn: "1d" }); //? claims
};
