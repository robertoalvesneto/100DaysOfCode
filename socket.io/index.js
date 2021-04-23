const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/controller', (req, res) => {
  res.sendFile(__dirname + '/pages/controller.html');
});
app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/pages/user.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  //Para enviar a mensagem
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  // Envia a mensagem para todo mundo com exceção do próprio emissário temos o
  // 'broadcast'
  //socket.broadcast.emit('hi'); 
});

io.emit('some event', {
  someProperty: 'some value',
  otherProperty: 'other value'
}); // This will emit the event to all connected sockets


server.listen(3000, () => {
  console.log('listening on *:3000');
});