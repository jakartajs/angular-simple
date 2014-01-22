'use strict';

app.provider('Authentication', function () {
  // Private variables
  var host;

  // Private constructor
	function Authentication(http, location, host) {
	  	this.isAuthorized = function(permission) {}
	  	this.isLoggedIn = function() {
	  		return false;
	  	}
	  	this.login = function(loginParam, onSuccess, onFail) {
        function onSuccess(data) {
          //location.path('/');
          console.log('succeed');
        }
        function onFail(data) {
          console.log('fails');
        }
        http.post(host + '/login.json', loginParam).success(onSuccess).error(onFail);
	  	}
	}

  // Public API for configuration
  this.setHost = function(url) {
  	host = url;
  }
  
  // Method for instantiating
  this.$get = function($http, $location) {
  	return new Authentication($http, $location, host);
  }
});