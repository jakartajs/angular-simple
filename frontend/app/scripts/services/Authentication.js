'use strict';

angular.module('angularSimpleApp')
  .service('Authentication', function Authentication() {
  	this.isAuthorized = function(permission) {}
  	this.isLoggedIn = function() {
  		return false;
  	}
});
