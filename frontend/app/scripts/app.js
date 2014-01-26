'use strict';

app.config(function($httpProvider, $routeProvider, $locationProvider, AuthenticationProvider, ServerConfProvider) {
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
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.interceptors.push(function($q, $location) {
        return {
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                    return $q.reject(response);
                }
                else {
                    return $q.reject(response);
                }
            }
        }
    });

    AuthenticationProvider.setHost(ServerConfProvider.host);
});
var a;
app.run(function($rootScope, $location, Authentication) {
  $rootScope.$on('$routeChangeStart', function(event, current, next) {
      if (!Authentication.isLoggedIn()) {
        $location.path('/login');
      }
      else {
        if (next == undefined) {
          $location.path('/');
        }
      }
  });
});