const assert = require('assert');
var transportFee = require('../transportFee.js');
describe('transportFee', function() {
  it("should return 'R20' when given 'morning'", function(){
    assert.equal(transportFee('morning'), 'R20');
  });
});
