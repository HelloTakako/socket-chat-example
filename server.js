const express = require('express');
//Express initializes app to be a function handler that you can supply to an HTTP server.
const app = require('express')();
const http = require('http').createServer(app);
//initialize a new instance of socket.io by passing the http (the HTTP server) object
const io = require('socket.io')(http);

const path = require('path');
// const session = require('express-session');

// port for Heroku deploy
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//listen on the connection event for incoming sockets and log it to the console.
//Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.
io.on('connection', (socket) => {
  //send the message to everyone, including the sender.
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // show "User is typing" message when someone is typing
  socket.on('user typing', (typingMsg) => {
    io.emit('user typing', typingMsg);
  });

  // send username to show who is online
  socket.on('userjoin', (nickname) => {
    socket.broadcast.emit('userjoin', nickname);
  });

  socket.on('loggedout', function(nickname){
    socket.broadcast.emit('loggedout', nickname);
    console.log(`${nickname} logged out` );
  });
  
  // each socket also fires a special 'disconnect' event:
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

//make the http server listen on specified port.
http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

// manual garbage collection
setInterval(function(){
  global.gc();
  console.log('GC done')
}, 1000*10);

