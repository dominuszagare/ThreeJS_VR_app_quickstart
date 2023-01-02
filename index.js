var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("public"));
var server = http.createServer(app);
server.listen(3000, function () {
	console.log("** Server is listening on localhost:3000, open your browser on http://localhost:3000/ **");
});
var sockets = require("socket.io")(server);


sockets.on("connection", socket => {
    console.log("New connection: " + socket.id);
});
