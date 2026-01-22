import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const generateJwtToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

// let token = generateJwtToken(email);

// console.log(token);

// let decodedToken = jwt.verify(token, "secret");

// console.log("decodedToken : ",decodedToken)