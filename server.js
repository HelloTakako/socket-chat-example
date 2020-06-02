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

//We define a route handler / that gets called when we hit our website home.
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/build/index.html');
// });

app.use(express.static(path.join(__dirname, 'build')));

/* session management.
 * Make sure this is defined before any of your routes
 * that make use of the session.
 */
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat', 
//   cookie: { maxAge: 60000, secure: true },
//   resave: false,
//   saveUninitialized: false
// }));

// let sess;
app.get('/*', (req, res) => {
  // sess = req.session;
  /*
  * Here we have assign the 'session' to 'sess'.
  * Now we can create any number of session variable we want.
  * in PHP we do as $_SESSION['var name'].
  */
  // sess.username; // equivalent to $_SESSION['username'] in PHP.

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

  //If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
  // io.on('connection', (socket) => {
  //   socket.broadcast.emit('hi');
  // });

  // each socket also fires a special 'disconnect' event:
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//make the http server listen on specified port.
http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

