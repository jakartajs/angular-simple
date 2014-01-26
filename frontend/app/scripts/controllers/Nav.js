'use strict';

angular.module('angularSimpleApp')
  .controller('NavCtrl', function ($location, $scope, Authentication) {
  	$scope.isLogoutBtnVisible = function() {
  		return Authentication.isLoggedIn();
  	}

		$scope.logout = function() {
			function onSuccess(data) {
        $location.path('/login');
			}
			Authentication.logout(onSuccess);
		}
	});
