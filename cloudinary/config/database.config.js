import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({quiet: true});

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected");
}