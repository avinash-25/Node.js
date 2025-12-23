//~ Buffer is a global object

// const { readFileSync } = require("fs");

// let buffer1 = Buffer.from("NodeJS"); // english letters --> one char takes 1 byte
// console.log(buffer1); // <Buffer 4e 6f 64 65 4a 53>
// console.log(buffer1.toJSON());

// buffer1.write("something");
// console.log(buffer1); // <Buffer 4e 6f 64 65 4a 53>
// console.log(buffer1.toJSON());
// console.log(buffer1.toString());

// let buffSize = Buffer.alloc(34); 
// buffSize.write("this is another buffer. this is made using alloc()");
// console.log(buffSize.toString());

/*  JSON Data
{ type: 'Buffer', 
 data: [ 78, 111,100, 101, 74, 83 ] 
}
*/

//! allocUnsafe() --> performance priory
//! allocSafe()
//! slice
//! subarray()

//! ============= streaming ================

const fs = require("fs");

// fs --> createReadStream, createWriteStream

// syntax for createReadStream --> createReadStream("path of the file", "encoding");

// let res = createReadStream("./fs.js", "utf-8");
//~ here, createReadStream(), internally emits an event named "data"
// console.log(res); //? event --> readStream

//? emit("event-name", data) --> using emit(), we can create an event.
//? on("event-name", callback) --> using on(), we define what to do next.

// res.on("data", (chunk) => {
//   console.log(chunk);
//   console.log("file read");
// });

// let payload = createReadStream("./fs.js", {
//   highWaterMark: 100, // chunk --> 100 bytes (threshold), default value is 64kb (64*1024 bytes)
//   encoding: "utf-8",
// });

// payload.on("data", (chunk) => {
//   console.log(`chunk size --> ${chunk.length}`);
//   console.log("=====================");
//   console.log(`chunk --> ${chunk}`);
// });

// syntax for createWriteStream --> createWriteStream("path of the file");

// let res = createWriteStream("./app.txt");
// res.write("this is my first chunk", (err) => {
//   if (err) console.log(err);
//   console.log("chunk added");
// });

//! if file is already preset then data will be over-written.

//! duplex streams ==>
let readFile = fs.createReadStream("./fs.js", {
  highWaterMark: 10,
  encoding: "utf-8",
});
let writeFile = fs.createWriteStream("./fs.txt");

//? pipe() --> it connects read and write
// read.pipe(write) --> left to pipe() will be readable stream and right to pipe() will be writable stream
//~ source.pipe(destination)

readFile.pipe(writeFile);

//! example of transform stream

readFile.on("data", 
  (chunk) => {
  console.log("reading chunk");

  let upperCaseChunk = chunk.toUpperCase();

  writeFile.write(upperCaseChunk, (err) => {
    if (err) console.log(err);
    console.log("data writing");
  });
});