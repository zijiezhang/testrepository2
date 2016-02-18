angular.module('guessNum',[]).controller('guessController',function($scope) {
	
	$scope.startGame = function() {
		$scope.num = Math.floor(Math.random() * 100 + 1);
		console.log($scope.num);
	}
	
	$scope.getNum = function() {
		var num = parseInt($scope.num);
		var answer = parseInt($scope.answer);
		if(num === answer) {
			alert('猜对了');
		} else if(answer > num) {
			alert('大了');
			$scope.answer = '';
		} else {
			alert('小了');
			$scope.answer = '';
		}
	}
})
