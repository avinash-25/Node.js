const http = require("http");
const fs = require("fs");
// import fs from "fs"

http
  .createServer((req, res) => {
    //! ===========sending plain text========================
    // res.writeHead(200, "myMessage", { "content-type": "text/plain" });
    // res.write(`string message --> plain/text`);
    // res.end();
    //! ===========sending html data========================
    // res.setHeader("key", "myValue");
    // res.writeHead(200, { "content-type": "text/html" });
    // let htmlContents = fs.readFileSync("./pages/index.html", "utf-8");
    // res.end(htmlContents);
    //! ===========sending css contents========================
    // res.writeHead(200, { "content-type": "text/css" });
    // fs.readFile("./pages/style.css", "utf-8", (err, data) => {
    //   if (err) console.log(err);
    //   res.end(data);
    // });
    //! =================== sending json response =========================
    // some lines of code
    res.writeHead(200, { "content-type": "application/json" });
    let resp = {
      success: true,
      message: "User registered Successfully",
      statusCode: 201,
      data: "",
    };
    res.end(JSON.stringify(resp));
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });

// node --watch filename --> this will watch the file, if the file is saved, it will be executed again

//? routing --> handling user's multiple requests

// https://nodejs.org/en/download --> home/base url
// https://nodejs.org/en/ --> home url
// default endpoint --> "/" (anything after the base url)
// https://nodejs.org/en/download --> "/download" is one endpoint
// https://nodejs.org/en/about --> "/about" is another endpoint

// /login, /register, /verify