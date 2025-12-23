const http = require("http");
const fs = require("fs");
// import fs from "fs"

http
  .createServer((req, res) => {
    if (req.url === "/") {
      let data = fs.createReadStream("./pages/index.html", "utf-8");
      res.writeHead(200, { "content-type": "text/html" });
      data.pipe(res);
    } else if (req.url === "/login") {
      res.end(
        JSON.stringify({
          success: true,
          message: "User registered Successfully",
          statusCode: 201,
          data: "",
        })
      );
    } else {
      res.end("404 page not found");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });