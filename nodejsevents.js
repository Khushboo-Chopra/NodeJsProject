const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

//listening the event

myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the motor!');
    setTimeout(()=>{
        console.log("Please turn off the motor! It's a gentle reminder");
    });
})

myEmitter.emit('WaterFull');