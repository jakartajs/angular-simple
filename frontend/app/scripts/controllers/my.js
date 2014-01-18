'use strict';

angular.module('angularSimpleApp').controller('MyCtrl', function ($rootScope, $scope) {
	$scope.newProduct = ''; // represents the text in the product input form
  $scope.products = [];
  $scope.add = function(text) {
  	$scope.products.push(text);
  	$scope.newProduct = ''; // clear the text in the product input form
  }
  $scope.remove = function(index) {
  	$scope.products.splice(index, 1); // remove one element at 'index'
  }
});
