const assert = require('assert');
var countRegNumber = require('../countRegNumber.js');
describe('countRegNumber', function() {
  it("should return '3' when given 'regList.length'", function() {
      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3)
  });
});
