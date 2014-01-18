'use strict';

angular.module('angularSimpleApp').controller('ProductCtrl', function ($rootScope, $scope) {
	$scope.products = [];
	$rootScope.message = {
		type: 'alert-error',
		text: 'Successfully loaded.'
	}
});
