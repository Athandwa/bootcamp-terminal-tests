const assert = require('assert');
var greet = require('../greet.js');
describe('greet', function() {
    it("should return 'Hi Bob!' when given 'Bob!'", function() {
    assert.equal(greet(' Bob!'), 'Hi Bob!');
    });
  });
