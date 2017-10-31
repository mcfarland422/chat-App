var http = require('http');

var express = require('express');
var app = express();

var server = http.createServer(app);
server.listen(8080);
console.log("The server is listening on port 8080")
