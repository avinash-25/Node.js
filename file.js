// global.console.log("Window Object"); // this works in nodejs environment

// globalThis.console.log("Heelo"); // this works everywhere

//? window.console.log("window"); // this works in browser only

// const key3 = "key3";

// const obj = {
//     key1: 1,
//     key2: 2,
//     key3,
// }

// console.log(obj.key3)


let arr = [1, 2, 3, 4, 5];

console.log("Before splice : ", arr);

arr.splice(2, 1);

let newArr = arr.slice(1,3);

console.log(newArr)

console.log("After splice : ", arr);



