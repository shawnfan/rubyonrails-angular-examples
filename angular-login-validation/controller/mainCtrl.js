angular.module('challenge',['ngMessages'])
.controller('MainCtrl', ['$scope',function($scope){
	$scope.email = "";
	$scope.username = "";
	$scope.password = "";
	$scope.register = function() {
		$scope.formValidate = false;
		$scope.submitAttempt = true;

		$scope.formValidate = jQuery.isEmptyObject($scope.registerForm.$error);

		if ($scope.formValidate) {
			$scope.submitAttempt = false;
			console.log("Email: " + $scope.email + "\nUsername: " + $scope.username + "\nPassword: " + $scope.password);
			alert("Thanks for registering!/nEmail: " + $scope.email + "\nUsername: " + $scope.username + "\nPassword: " + $scope.password + "\nWill reload the page as you click ok.");
			location.reload();
		} else {
			alert("Please enter correct information for registeration! Thanks");
		}
	};
	
}]);



















