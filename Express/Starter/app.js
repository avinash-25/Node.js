//! 1) import
import express from "express";

// console.log(express);

//! 2) invoking or calling top level function
let app = express();

// app.HTTP_METHOD("/endpoint", (req, res) => {
// res.send()
// });

//! ROUTING
app.get("/", (req, res) => {
  //   res.send("hello from express");
  //   res.end("hello from express");
  res.json({
    success: true,
    message: "User registered Successfully",
    statusCode: 201,
    data: "",
  });
});

app.get("/about", (req, res) => {
  res.send("this is abut page");
});

//! 3) assign a port
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});