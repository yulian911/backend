const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server , {
    cors: {
      origin: "*",
      methods: ["GET","POST"]
      //musi methods
    },
  });
io.on('connection', (socket) => { 

console.log('use ')
socket.on('rooms', function(data) { 
    io.emit('kirim',data)})

 });
server.listen(8000);