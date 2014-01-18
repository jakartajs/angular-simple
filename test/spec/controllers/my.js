'use strict';

describe('Controller: MyCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSimpleApp'));

  var MyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCtrl = $controller('MyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
