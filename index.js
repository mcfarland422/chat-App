const http = require('http');

var express = require('express');
var socketio = require("socket.io");
var app = express();
app.use(express.static(__dirname + '/public'));
// app.get('/', (req,res,next)=>{
//   res.send("Hello, World");
// });
var server = http.createServer(app);
server.listen(8080);

var io = socketio.listen(server);

// The way that socket.io works...
// 1 .on to listen
// 2 .emit to send
io.sockets.on('connect', (socket)=>{
  console.log("Someone connected via a socket!!");
  //ADD ALL EVENT LISTENERS
  socket.on('nameToServer',(data)=>{
    var clientInfo = {
      name: data,
      clentId: socket.id
    }
    users.push(clientInfo);
    console.log(data);
    io.sockets.emit('newUser', users);
  });
});



console.log("The server is listening on port 8080");
console.log("And io is listening ot the listener.. for websocket traffic");

// setTimeout(wait, 1000)
// function
