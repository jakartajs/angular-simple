'use strict';

app.provider('Authentication', function () {
  // Private variables
  var host;

  // Private constructor
	function Authentication(http, host) {
	  	this.isAuthorized = function(permission) {}
	  	this.isLoggedIn = function() {
	  		return false;
	  	}
	  	this.login = function(loginParam, onSuccess, onFail) {
        function onSuccess(data) {
          console.log(data);
        }
        function onFail(data) {

        }
        http.post(host + '/login.json', loginParam).success(onSuccess).error(onFail);
	  	}
	}

  // Public API for configuration
  this.setHost = function(url) {
  	host = url;
  }
  
  // Method for instantiating
  this.$get = function($http) {
  	return new Authentication($http, host);
  }
});