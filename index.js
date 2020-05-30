//Express initializes app to be a function handler that you can supply to an HTTP server.
var app = require('express')();
var http = require('http').createServer(app);
//initialize a new instance of socket.io by passing the http (the HTTP server) object
var io = require('socket.io')(http);

// port for Heroku deploy
const PORT = process.env.PORT || 3000;

//We define a route handler / that gets called when we hit our website home.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
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

  //If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
  // io.on('connection', (socket) => {
  //   socket.broadcast.emit('hi');
  // });

  // each socket also fires a special 'disconnect' event:
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//We make the http server listen on port 3000.
http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})