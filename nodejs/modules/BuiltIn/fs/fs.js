//^ fs --> file system. this module is used to interact with files and folders present in the OS
//~ interaction means --> CRUD (create, read, update, delete)
// syntax --> const variable_name = require("node:module_name")
// syntax --> import variable_name from "node:module_name"

const fs = require("node:fs"); // name of the module

//^  ================================= using fs synchronously ================================

//? 1) create a file
// method name ==> writeFileSync()
// syntax --> fs.writeFileSyn("path/name", "data/content")
//& we can pass any extension to the file

// console.log("1");
// fs.writeFileSync("./someOther.json", ` `);
// console.log("file created");
// console.log("2");
// console.log("3");
//? if the file is already present, then all the previous data will be over-written

//?  2) reading a file (get/fetch)
// method name --> readFileSync()
// syntax--> readFileSync("path", "encoding")

//^ (0s and 1s)binary
// hello 123 --> binary
//~ character set --> each english letter and some special characters and numbers are represented by a unique character set (number) designated by ASCII (126 character) UNICODE

//~ character encoding --> while converting to binary, encoding defines how many bits will it take to store a value
// 1 byte = 8 bits

//? why utf-8 is popular --> // backward compatibility & variable length encoding

// console.log("start");
// console.log("middle");

let content = fs.readFileSync("../../../demo.js");
console.log(content);
/* // <Buffer 6c 65 74 20 75 73 65 72 6e 61
3d 20 ... 60 more bytes> */ // --> buffer is like an array which stores data in binary form

// let readableContent = content.toString(); // default encoding value of toString() is utf-8 (unicode transformation format)
// console.log(readableContent);

// let res = fs.readFileSync("../modules.js", "utf-8");
// console.log(res);

// // console.log(Buffer.from(res));

// console.log("end");

//?  3) updating(appending) a file --> only used to add data at the last of the file
// method name --> appendFileSync()
// syntax --> appendFileSync("path", "data to be appended")

// console.log(1);
// console.log(2);
// fs.appendFileSync("./server.js", "data");

// console.log(3);

//! using appendFileSync() if the file is not present at the specified path, then it will create a new file other-wise it will append the data at the end of the file

//? 4) deleting a file
// method name --> unlinkSync()
// syntax --> unlinkSync("path")

// try {
//   fs.unlinkSync("../../../demo.js");
//   console.log("file deleted");
// } catch (error) {
//   if (error.code === "ENOENT") {
//     console.log("file not found");
//   } else {
//     console.log(error);
//   }
// }

//? 5) creating a folder
// method name --> mkdirSync() --> make directory
// syntax --> mkdirSync("path/name", options)

// demo/folder1/folder2/folder3/...........
// fs.mkdirSync("./demo/fol1/fol2/fol3/app.js", { recursive: true });
//! recursive : true --> this will recursively call the function until the structure is created, by default it is set to false.

//! create this folder structure -> backend/controller/user.js
// function createStructure() {
//   fs.mkdirSync("./backend");
//   fs.mkdirSync("./backend/controller");
//   fs.writeFileSync("./backend/controller/user.js", "let a  = 20");
// }

// createStructure();

// fs.mkdirSync("./backend/controller/user", { recursive: true });
// fs.writeFileSync("./backend/controller/user.js/user.txt", " ");
// console.log("created");

//? 6) removing a folder/directory
// method name --> rmdirSync() --> remove directory
// syntax --> rmdirSync("path/name", options)

// fs.rmdirSync("./backend", { recursive: true }); // avoid this because it will be deprecated

// fs.unlinkSync("./backend/controller/user.js/user");
// fs.rmdirSync("./backend/controller/user.js");
// fs.rmdirSync("./backend/controller");
// fs.rmdirSync("./backend");

//? 7) to rename a folder or file (using this method we can also move a file or folder to a different path)
// method name -->  renameSync()
// syntax -->  renameSync("old path of folder/file", "new path of folder/file")

//! for files
// fs.renameSync("./demo.txt", "../../app.js");
// console.log("file renamed");
//& 1) we are renaming a file
//& 2) we can also move this file

//! for folders
// fs.renameSync("../dummy", "./content");
//& 1) we are renaming a file
//& 2) we can also move this file

//~ copy the contents of "fs.js" to a new file named "fs.txt"
// 1) read the contents of fs.js --> let contents = readFileSync()
// 2) write the contents in new file "fs.txt" --> appendFileSync()

// let contents = fs.readFileSync("./fs.js", "utf-8");
// fs.appendFileSync("./fs.txt", contents);
// console.log("file copied");

//? 8) to copy a file
// method name --< copyFileSync()
// syntax --> fs.copyFileSync("source", "dest")
// fs.copyFileSync("./fs.js", "../fs.md");

//~ error first callbacks --> in this, the first parameter is reserved for error in the callback function

//! ===================== asynchronous execution using fs  (using callbacks, then/catch, async-await)===========================

//! 1) reading a file
//? method name --> readFile()
//? method name --> readFile("path", "encoding", callback)

// console.log(1);
// fs.readFile("./index.html", "utf-8", (error, data) => {
//   if (error) console.log("error occurred", error);
//   console.log(data);
// });

// console.log(2);
// console.log(3);

//! 2) writing a file
//? method name --> writeFile()
//? method name --> writeFile("path", "data", callback)

// console.log(1);
// fs.writeFile("./demo.txt", "this is txt file", (error, data) => {
//   if (error) console.log(error);
//   console.log("File created");
// });
// console.log(2);
// console.log(3);

//! 3) appending/updating a file
//? method name --> appendFile()
//? syntax --> appendFile("path", "data", callback)

// console.log(1);

// fs.appendFile("./demo.txt", "\n this is new line", (err) => {
//   if (err) console.log(err);
//   console.log("file appended");
// });

// console.log(2);
// console.log(3);

//~ if the file is not present then a new file will be created

//~ here problem is that, we don't know which callback will get executed first, so the order of execution remains inconsistent.
//! in order to maintain a consistent op, we must write every async operation in the callbacks provided
// fs.writeFile("./demo.txt", "this is new file", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });

// fs.appendFile("./demo.txt", "this is second updated data", (err) => {
//   if (err) console.log(err);
//   console.log("file updated");
// });

// fs.appendFile("./demo.txt", "this is updated data", (err) => {
//   if (err) console.log(err);
//   console.log("file updated");
// });

//! ================================== consistent op ====================================

// fs.writeFile("./demo.txt", "this is new file", (err) => {
//   if (err) throw new Error("some error occurred");
//   console.log("file created");

//   fs.appendFile("./demo.txt", "this is updated data", (err) => {
//     if (err) console.log(err);
//     console.log("file updated");

//     fs.appendFile("./demo.txt", "this is second updated data", (err) => {
//       if (err) console.log(err);
//       console.log("file updated");
//     });
//   });
// });
//~ here first, file will get created, then only update1 will get executed and after that update2

//TODO: deleting a file, creating a folder. removing. renaming, copy

//! ===================== asynchronous execution using fs  ( callbacks, using then/catch, async-await)===========================

// import fsP from "fs/promises";
const fsP = require("node:fs/promises");
// const fsP = require("fs").promises

//! 1) creating a file -->
// method name --> writeFile()

// let writeFile = fsP.writeFile("./demo.py", "data");
// writeFile
//   .then(() => {
//     console.log("created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 2) reading a file -->
// method name --> readFile()

// let readFile = fsP.readFile("./demo.txt", "utf-8");
// readFile
//   .then((payload) => {
//     console.log(payload);
//     console.log("file read");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 3) append a file -->
// method name --> appendFile()

let result = fsP.appendFile("./app.txt", "this is new data");

// result
//   .then(() => {
//     console.log("file appended");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//TODO: deleting a file, creating, removing and renaming folder
//~ folder structure (callbacks and then/catch)

//! ===================== asynchronous execution using fs  ( callbacks, then/catch, using async-await)===========================
//? async is used in function declaration and await is used inside function body.
//? async function always returns a Promise.

//! 1) read a file
//? method name --> readFile("path", "encoding")

console.log("1");
console.log("2");
async function readFiles(params) {
  let read = await fsP.readFile("../modules.js", "utf-8");

  console.log(read);
}

console.log(3);
readFiles();
//TODO: rest (op CRUD)