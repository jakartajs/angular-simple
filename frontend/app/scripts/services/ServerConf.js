'use strict';

app.provider('ServerConf', function () {
    // Private variables
  	this.host = 'http://localhost:3000';

    // Private constructor
    function ServerConf() {
    	this.host = host;
    }
    // Public API for configuration

    // Method for instantiating
    this.$get = function () {
      return new ServerConf();
    };
  });
