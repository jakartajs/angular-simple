'use strict';

describe('Service: ServerConf', function () {

  // load the service's module
  beforeEach(module('angularSimpleApp'));

  // instantiate service
  var ServerConf;
  beforeEach(inject(function (_ServerConf_) {
    ServerConf = _ServerConf_;
  }));

  it('should do something', function () {
    expect(!!ServerConf).toBe(true);
  });

});
