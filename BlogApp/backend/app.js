// console.log(process.env); // it is an object

import cookieParser from "cookie-parser";
import express from "express";

import connectDB from "./config/database.config.js";

import { PORT } from "./config/index.js";

import { errorHandler } from "./middlewares/errorHandler.middleware.js";

import blogRoutes from "./routes/blog.route.js";
import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// npm i cookie-parser

//! api versioning --> version
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

//! error middleware
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log("error occurred while starting the server");
  console.log("Server Running", process.env.PORT);
});

//! while using default script, in the terminal, run "npm scriptName"
//! while using custom script, in the terminal, run "npm run scriptName"

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
