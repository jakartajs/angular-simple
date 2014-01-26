'use strict';

app.controller('LoginCtrl', function ($scope, $cookies, $cookieStore, $location, Authentication) {
	$scope.login = function() {
		var loginData = {
			username: $scope.username,
			password: $scope.password
		};
		function onSuccess(data) {
      $location.path('/');
		}
		function onFail(data) {

		}
		Authentication.login(loginData, onSuccess, onFail);
	}
});
