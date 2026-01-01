import express from "express";

const app = express();

app.use((req, res, next) => {
  req.myName = "varun";
  console.log("middleware 1 called");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});
app.use((req, res, next) => {
  console.log("middleware 3");
  next();
});
app.use((req, res, next) => {
  console.log("middleware 4");
  next();
});

app.get("/users", (req, res) => {
  console.log("from controller", req.myName);
  res.send("all users");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running att port 9000");
});

//! middleware is function, which executes between req and res.
//! each middleware function has three parameters req, res, next
//! using middleware, we can modify req and res objects
//! next() will call the next middleware present, if no middlewares are there, it will call the controller

//! types of middlewares
//? 1) built-in middlewares
//? 2) custom middlewares
//? 3) global middlewares
//? 4) router middlewares
//? 5) error middlewares