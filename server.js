const express = require('express');
//Express initializes app to be a function handler that you can supply to an HTTP server.
const app = require('express')();
const http = require('http').createServer(app);
//initialize a new instance of socket.io by passing the http (the HTTP server) object
const io = require('socket.io')(http);
// to format time
const formatMessage = require('./src/utils/messages');

const makeId = require('./src/utils/room');

const path = require('path');

const PORT = process.env.PORT || 8080;


// --------------------
// user management

// Join user to chat
function userJoin(id, username, room ) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}
// --------------------

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const adminName = "AdminBot";
const users = [];

const nsp = io.of('/room?id=');

//listen on the connection event for incoming sockets and log it to the console.
//Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.
io.on('connection', (socket) => {

  socket.on('go-to-room', ([username, room]) => {

    const userId = makeId(15);
    let roomId = room === "public" ? "public" : makeId(10);  
    const user = userJoin(userId, username, roomId);
  
    socket.join(`room?id=${user.room}`);
    socket.emit('jump-to-room', [user.room, user.id]);
    console.log(user.room, user.id);
    
    socket.emit(
        'message', 
        formatMessage(adminName, `Welcome, ${user.username}!`)
      );

    socket.broadcast
      .to(`room?id=${user.room}`)
      .emit(
        'message', 
        formatMessage(adminName, `${user.username} has joined`)
      );

    io.to(user.room).emit('room-users', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
    
  });

  // show "User is typing" message when someone is typing
  socket.on('user typing', ([typingMsg, userId]) => {
    const user = getCurrentUser(userId); 
  });

  //send the message to everyone, including the sender.
  socket.on('message', ([msg, userId]) => {
    const user = getCurrentUser(userId); 
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // socket.on('loggedout', function(nickname){
  //   socket.broadcast.to(user.room).emit('userloggedout-admin', formatMessage(nickname, `${nickname} has left`));
  // });
  
  // each socket also fires a special 'disconnect' event:
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// --------------------
// Room
// --------------------
nsp.on('connection', function(socket){
  console.log('someone connected');
});

//make the http server listen on specified port.
http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

// manual garbage collection
setInterval(function(){
  global.gc();
  // console.log("GC Done");
}, 1000*10);

