// let obj = {
//     name: "Avinash",
//     pincode: "201301"
// }

// function printName(name) {
//     console.log("Hello, ",name);
// }

// let arr = [1, 2, 3, 4, 5];

// module.exports = [printName, obj, arr]

//& we cant export like this
// module.exports = printName
// module.exports = obj
// module.exports = arr

//^ performing import(require), export(module.exports) using commonJS (by default in nodeJS)
//* using module.exports we can export only thing at a time.
//* if we try to send multiple things then only last one will be exported.
//* if the key and value name is same in object then we use only one name.

//? 1) named export
/**
 * syntax : export let/const identifier = value
 */
//? 1) default export
/**
 * we can use default once in a file
 */


export let sum = (a, b) => {
    return a + b;
}

export default sum;

/*
export let obj1 = {
    name: "Abc"
}

export let arr = [1, 2, 3, 4, 4];
*/




