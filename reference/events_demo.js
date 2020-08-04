const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter {

}

//Init Object
const myEmitter = new MyEmitter();

//Create Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');