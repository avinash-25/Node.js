//! steps to create a server using http module

//~ 1) import http module --> destructure createServer()
//~ 2) createServer(), takes an argument --> callback function
//~ 3) that callback function takes two parameters --> req and res
//~ 4) assign a port number to the instance of the server --> listen(portNumber, callback function)

const { createServer } = require("node:http");

let server = createServer((req, res) => {
    console.log("req accepted from client side");
    res.end("hi from server"); //^ always should be in the last because its end the cycle.
  // //! this will end the cycle, along with that we can also send some data which will be displayed on the UI
  //~ ------------------------------------------------------------------
  //   res.write("this is from write method");
  //   res.write("this is from write method 2 ");
  //   res.write("this is from write method 3");
  //   res.end();
  //   res.write("response after end"); //? this will give an error
  //~ -------------------------------------------------------------------
  //   res.writeHead(202, { "content-type": "text/plain" });
  //   res.end("hi");
  //   //   res.end("hello");
  //~ using writeHead(statusCode, {content-type}) we set the statusCode and content-type of the response
  //~ -------------------------------------------------------------------
  //   console.log(req.url); // '/'
  //   console.log(req.method); // GET
  //~ req and res both are stream objects
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});

//! in order to send the req to the server
//? open browser --> localhost:portNumber
//? --> 127.0.0.0.1:90000

//! if we want to close the server
//? in terminal --> press ctrl + c

//! after every modification, we have to restart the server to see the changes