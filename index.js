//create all necessary variables for server
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
//actually create server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
//feed client with index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//activate server connection port
server.listen(5506, () => {
  console.log("listening on *:5506");
});
//begin socket connection
io.on("connection", (socket) => {
  let count=0;
  socket.on("Marco", () => {
   // begin connection test
    console.log("Polo");
    socket.emit("Polo");
    count++;
    console.log(count);
  });
      //end connection test

});
//end socket connection

