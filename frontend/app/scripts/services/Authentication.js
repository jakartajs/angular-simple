'use strict';

app.provider('Authentication', function () {
  // Private variables
  var host;

  // Private constructor
  function Authentication(http, location, cookies, cookieStore, host) {
      this.isAuthorized = function(permission) {}
      this.isLoggedIn = function() {
        var authToken = cookieStore.get("auth");
        if (authToken != undefined) {
          return true;
        }
        else {
          return false;
        }
      }
      this.login = function(loginParam, onSuccess, onFail) {
        function onSuccess(data) {
          cookieStore.put("auth", data);
        }
        function onFail(data) {
          console.log('fails');
        }
        http.post(host + '/login.json', loginParam).success(onSuccess).error(onFail);
      }
      this.logout = function() {
        cookieStore.remove("auth");
      }
  }

  // Public API for configuration
  this.setHost = function(url) {
    host = url;
  }
  
  // Method for instantiating
  this.$get = function($http, $location, $cookies, $cookieStore) {
    return new Authentication($http, $location, $cookies, $cookieStore, host);
  }
});