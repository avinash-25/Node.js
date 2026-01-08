//~ Event in nodejs is used to handle async task(callback) in nodejs (decoupling the code)
//* In nodejs, event-emitter is a class is used to create custom events.

import EventEmitter from "events";

let event = new EventEmitter();

//& To create an event --> emit("eventName", "data1", data2, ...........);
//& To listen to an event --> on("eventName", callback)
//? Always on() before emit()

event.on("hi", () => {
    console.log("hi event is triggered");
})

event.on("hello", () => {
    console.log("hi event is triggered");
})

event.emit("hi") // created an event with the name as "hi"
event.emit("hello");

console.log("hi");