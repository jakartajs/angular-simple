'use strict';

angular.module('angularSimpleApp')
  .controller('NavCtrl', function ($scope) {
		$scope.logout = function() {

			function onSuccess(data) {

			}
			function onFail(data) {

			}
			Authentication.logout(onSuccess, onFail);
		}
	});
