import express from 'express';
import { connectDB } from './config/database.config.js';
import router from './routes/user.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import dotenv from 'dotenv';
dotenv.config({quiet: true}); // this will read/parse the variables present in .env file.    
//this should be on the top of the file. It loads all the variables defiened in .env file into process.env
import cookieParser from 'cookie-parser'

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use("/user", router);
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
})



//^ while using default script, in the terminal, run "npm scriptName"
//^ while using custom script, in the terminal, run "npm run scriptName"

//! open cmd as admin, run "net start mongodb"

//! zero dependency packages : packages which are not depended on any other package

//! req(readable stream, mainly properties(url, body, cookies, etc..)) and res(writable stream) are objects(streams, mainly methods(json, send, status, etc..))

//   "version": "1.0.0"
//? right digit --> minor fixes, patchworks
//? middle digit --> a fewer upgrades
//? left digit --> major update

//? http://localhost:9000/apiVersion/endpoint
//? protocol://domainName:portNumber/apiVersion/endpoint

//! API --> application programming interface.
//? it is an interface that allows to software to communicate with each other.

//~ RESTFUL Api's --> any api is an restful api if it follows rest architecture (REPRESENTATIONAL STATE TRANSFER)
//? 1) stateless : the server does not store any data, each req is independent of each other
//? 2) api's are resource based URL (/register, /all, /login)
//? 3) api's are built using HTTP methods