//! modules --> it is piece of code, which can be re-used in other files

//? it helps to improve readability and maintainability of code
//? using modules we can easily scale our application
//? DRY --> Don't Repeat Yourself
//? it is used to break down complex code into smaller pieces

//& different format of modules used -->
//~ 1> commonJS: require and exports (nodeJS by default uses commonJS syntax, unless specified in package.json file)
//~ 2> ES-modules import and export

//? export or module.exports --> we make the code available for other files
//? import or require --> we use the code exported from other files

//! types of modules in nodeJS -->
//~ 1) user-defined modules/ custom modules: which is created by developers

//~ 2) built-in modules/ core modules: which is already present, or is a part of the nodeJS installation, examples --> http, fs, os, crypto, path, cluster, worker_threads, qs, queryString, etc..

//~ 3) third-party modules/ external modules: which is used from third party lib.

//> in commonJS file --> we have a function wrapper --> Module function wrapper: nodejs internally wraps all the code inside an iife with following parameters exports, require, module, __filename, __dirname

// (function (exports, require, module, __filename, __dirname) {
//   console.log("hello");
//   console.log(__filename);
//   console.log(__dirname);
//   console.log(module);
//   console.log(exports);
//   console.log(require);
// })();

//! global variables of functions --> setTimeout(), __filename, etc..
//? these variables don't require any specific file to be imported

// console.log(__dirname); // C:\Users\ASUS\Desktop\Classes\node_1700\Node\Modules
// console.log(__filename); // C:\Users\ASUS\Desktop\Classes\node_1700\Node\Modules\modules.js
// console.log(module);
// console.log(require);
// console.log(exports);
// comment