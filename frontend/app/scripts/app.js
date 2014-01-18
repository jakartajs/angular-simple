'use strict';

var app = angular.module('angularSimpleApp', [])

app.config(function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true); // use http://site/routeName instead of http://site/#/routename
  $routeProvider
    .when('/', {
      templateUrl: 'views/my.html',
      controller: 'MyCtrl'
    })
    .when('/my', {
      templateUrl: 'views/my.html',
      controller: 'MyCtrl'
    })
    .when('/products', {
      templateUrl: 'views/product.html',
      controller: 'ProductCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});

app.run(function($rootScope, $location, Authentication) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (!Authentication.isAuthorized(next.permission)) {
      if (!Authentication.isLoggedIn()) {
        $location.path('/');
      }
      else {
        $location.path('/login');
      }
    }
  });
});