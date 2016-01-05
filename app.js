var express  = require('express')
var serveStatic = require('serve-static')
var session = require('express-session')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json({limit : '1mb'}))

app.use(bodyParser.urlencoded({
	extended : true
}))

app.use('/playgame',serveStatic('public',{index: ['form.html']}))
//app.use('/public',serveStatic('public',{index: false}));

app.use(session({
	secret : 'test',
	resave : false,
	saveUninitialized : true
}))

app.use('/setNum',function(req,res,next) {
	var getNum = Math.floor(Math.random() * 100) + 1;
	req.session.num = getNum;
	console.log(req.session.num);
	//console.log(req.session);
	res.end();
})

app.get('/subNum',function(req , res , next) {
	//console.log(">>>>>>>>>>>>>>>>>"+req.body.num);
	var subnum = req.body.num;
	var num1 = req.session.num;
	//console.log(num1);
	if(subnum == num1) {
		res.send({'code': 1});
	} else {
		res.send({'code': 0});
	}
	res.end();
})
app.listen(8080);
