const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout (() =>{
    //Emit event
    myEmitter.emit('log', 'Log event emitted!') //could add additional parameters if wanted
},
2000);
//to duplicate code below use: opt,shi,dwn
//opt + z to auto wrap code not beyond screen