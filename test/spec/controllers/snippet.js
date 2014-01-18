'use strict';

describe('Controller: SnippetCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSimpleApp'));

  var SnippetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnippetCtrl = $controller('SnippetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
