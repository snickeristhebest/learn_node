const EventEmitter = require('events');


const Logger = require('./logger');
var logger = new Logger();


logger.on('messageLogged', (arg)=>{
    console.log("called",arg)
})


logger.log('message');

