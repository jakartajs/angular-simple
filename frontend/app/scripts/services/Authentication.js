'use strict';

app.provider('Authentication', function () {
  // Private variables
  var host;

  // Private constructor
  function Authentication(http, location, cookieStore, host) {
      this.isAuthorized = function(permission) {}
      this.isLoggedIn = function() {
        return false;
      }
      this.login = function(loginParam, onSuccess, onFail) {
        function onSuccess(data) {
          
          console.log('succeed');
          var cookie = cookieStore.get('key');
          console.log(cookie);
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
  this.$get = function($http, $location, $cookieStore) {
    return new Authentication($http, $location, $cookieStore, host);
  }
});