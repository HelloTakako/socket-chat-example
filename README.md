# Real-time Chat App

### Libraries & Frameworks
[React.js](https://reactjs.org/)  
[Node.js](https://nodejs.org/en/)  
[Express.js](https://expressjs.com/)  
[Socket.io](https://socket.io/get-started/chat/)  
  
UI Framework:  
[Material-UI](https://material-ui.com/)
  
  
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want.  
Any objects that can be encoded as JSON will do, and binary data is supported too.  
  

### Development
```
npm install
```
  
#### Server
```
nodemon index.js
```
Server listen to port 8080.
  
Add:  
```
"proxy": "http://localhost:8080",
```
in 'package.json'
  
#### Client
```
npm run dev-start
```
The app will launch on http://localhost:3000.