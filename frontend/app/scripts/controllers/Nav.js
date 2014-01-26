'use strict';

angular.module('angularSimpleApp')
  .controller('NavCtrl', function ($scope, Authentication) {
		$scope.logout = function() {
			function onSuccess(data) {
        $location.path('/login');
			}
			function onFail(data) {

			}
			Authentication.logout(onSuccess, onFail);
		}
	});
