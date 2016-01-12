function fibo(n) {
	if(n === 0) {
		return 0;
	}
	if(n == 1 || n == 2) {
		return 1;
	}
	return fibo(n-1) + fibo(n-2);
}
function* gen(num) {
	for (var i = 0; i <= num; i++) {
		yield show(fibo(i));
	}
}
function show(val){
	console.log('>>>>'+val);
}
function start(gen,num) {
	var g = gen(num);
	function nextStep(it) {
		if(it.done) {
			return;
		}
		setTimeout(function(){
        	nextStep(g.next());
    	},1000);
	}
	nextStep(g.next());
}
start(gen,5);
//gen().next()
