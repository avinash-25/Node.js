import express from 'express';
import { connectDB } from './config/database.config.js';
import router from './routes/user.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import dotenv from 'dotenv';
dotenv.config({quiet: true}); // this will read/parse the variables present in .env file.    
//this should be on the top of the file. It loads all the variables defiened in .env file into process.env

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/users", router);
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log("Server is running at 9000");
})



//? while using default script, in the terminal, run "npm scriptName"
//? while using custom script, in the terminal, run "npm run scriptName"

//? open cmd as admin, run "net start mongodb"