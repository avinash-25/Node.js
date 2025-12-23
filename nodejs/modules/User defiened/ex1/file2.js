
// const array = require("./file1");


// let fun = array[0];
// fun("Avi");

// let obj = array[1];
// console.log(obj);

// let arr = array[2];
// console.log(arr)
// printName("Avinash");
// console.log(obj);
// console.log(arr);
//*-------------------------- ESM ------------------------------------------------------------

// in ESM one way to export
// import {keys} from "path of file"

import { sum, obj1, arr } from "./file1.js"; //* Always use extension

console.log(sum(3, 4));

console.log(arr);
console.log(obj1);




