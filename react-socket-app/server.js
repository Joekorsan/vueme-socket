const express = require('express');
const app = express();
const http = require('http');
const sockeIO = require('socket.io');
const logger = require('morgan');
const port = process.env.PORT || 8000;

const server = http.createServer(app);
app.use(logger('dev'));
let conversation = [];


const io = sockeIO(server);


io.on('connection', socket => {
  console.log('new Client Connnected');

  socket.on('send message', (message) => {
    console.log('message received', message)
    conversation = message.messageList.length ? [...conversation, message.message] : [message.message];
    io.sockets.emit('new message', conversation);
  })

  socket.on('disconnect', ()=>{
    console.log('User disconnected');

  })
})//end of io.on()






server.listen(port, ()=>{
  console.log('listening on port: ',port);
})
