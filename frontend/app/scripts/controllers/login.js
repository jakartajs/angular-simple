'use strict';

app.controller('LoginCtrl', function ($scope, Authentication) {
	$scope.login = function() {
		var loginData = {
			username: $scope.username,
			password: $scope.password
		};
		function onSuccess(data) {

		}
		function onFail(data) {

		}
		Authentication.login(loginData, onSuccess, onFail);
	}
});