'use strict';

angular.module('angularSimpleApp', []).config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true); // use http://site/routeName instead of http://site/#/routename
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'ProductCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
