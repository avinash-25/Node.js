import dotenv from "dotenv"; // this should be at the top of the file. it loads all the variables defined in .env file into process.env
dotenv.config({ quiet: true }); // config(), will read/parse the variables present in .env file

export const PORT = process.env.PORT || 9000;

export const MONGODB_URL = process.env.MONGODB_URL;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
