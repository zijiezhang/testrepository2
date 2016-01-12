var co = require('co')
var Promise = require('promise')

//打印过程
function* fibo(n) {
	if(n === 0) {
		return 0;
	}
	if(n == 1 || n == 2) {
		return 1;
	}
	var z = (yield fibo(n-1)) + (yield fibo(n-2));
	//var z = fibo(n-1) + fibo(n-2);
	console.log(z);
	yield sleep();
	return z;
}

function sleep(){
	return new Promise(function(resolve) {
		setTimeout(function(){
         	resolve();
    	},1000)
	})
}
co(fibo(5)).then(function (){
 	console.log('Generator 函数执行完成');
})


//co执行
// function fibo(n) {
// 	if(n === 0) {
// 		return 0;
// 	}
// 	if(n == 1 || n == 2) {
// 		return 1;
// 	}
// 	return fibo(n-1) + fibo(n-2);
// }
// function* gen(num) {
// 	for (var i = 0; i <= num; i++) {
// 		var z = fibo(i);
// 		yield show(z);
// 	}
// }
// function show(val){
// 	return new Promise(function(resolve) {
// 		setTimeout(function(){
//          	console.log(val);
//          	resolve();
//     	},1000)
// 	})
// }
// var g = gen(10)
// co(g)


//手动执行next
// function show(val){
// 	console.log('>>>>'+val);
// }
// function start(gen,num) {
// 	var g = gen(num);
// 	function nextStep(it) {
// 		if(it.done) {
// 			return;
// 		}
// 		setTimeout(function(){
//         	nextStep(g.next());
//     	},1000);
// 	}
// 	nextStep(g.next());
// }
// start(gen,5);
//gen().next()
