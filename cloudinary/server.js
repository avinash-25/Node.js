import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database.config.js';
import  userRoutes from './routes/user.routes.js';

dotenv.config({quiet: true});

const app = express();

connectDB();

app.use(express.json({ urlencoded: true }));
app.use(cors());


app.use("/api", userRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
