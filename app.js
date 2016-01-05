var express  = require('express');
var serveStatic = require('serve-static');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var getNum;
app.use(bodyParser.json({limit : '1mb'}));
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use('/playgame',serveStatic('public',{index: ['form.html']}));
//app.use('/public',serveStatic('public',{index: false}));
app.use('/setNum',session({
	secret : 'test',
	resave : false,
	saveUninitialized : true
}));
app.use('/setNum',function(req,res,next) {
	getNum = Math.floor(Math.random() * 100) + 1;
	req.session.num = getNum;
	console.log(req.session.num);
});

app.post('/subNum',function(req , res) {
	//console.log(">>>>>>>>>>>>>>>>>"+req.body.num);
	var subnum = req.body.num;
	if(subnum == getNum) {
		res.send({"code": 1});
	} else {
		res.send({"code": 0});
	}
});
app.listen(8080);
