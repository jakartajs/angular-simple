'use strict';

angular.module('angularSimpleApp')
  .service('Serverconf', function Serverconf() {
    this.host = 'http://localhost:3000';
  });
