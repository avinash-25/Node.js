import os from "node:os";

// console.log(os);

//? arch() --> It returns the architacture of the cpu
// console.log(os.arch());


//? cpus() --> returns the cores present in the syatem
console.log(os.cpus());


//?tatalmen() --> it gives the tatal ram present
// console.log(`${os.totalmem() / (1024 * 1024 * 1024).toFixed(2)}gb`);

//? freemen() :--> Returns the amount of free system memory in bytes as an integer.
// console.log(os.freemem());


//? hostname() : Returns the host name of the operating system as a string.
// console.log(os.hostname());


//? returns the platform 
// console.log(os.platform());
// console.log(os.constants);

//? Returns the string path of the current user's home directory.
// console.log(os.homedir());

//? Returns the operating system as a string.
// console.log(os.release());

//? Returns the system uptime in number of seconds.
// console.log(os.uptime());

console.log(os.cpus().length);