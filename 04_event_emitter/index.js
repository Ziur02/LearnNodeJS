const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add event listener for the log evnet
myEmitter.on("log", (msg) => {
    logEvents(msg);
});

setTimeout(() => {
    // emit the log event
    myEmitter.emit("log", "log event emitted!");
}, 2000);
