var express  = require('express');
var app = express();

app.get('/admin',function(req , res) {
	res.send("hello node.js");
}).listen(8080);