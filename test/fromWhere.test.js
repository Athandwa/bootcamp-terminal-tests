const assert = require('assert');
var fromWhere = require('../fromWhere.js');
describe('fromWhere', function () {
  it("should return 'Bellville' when given 'CY'", function () {
    assert.equal(fromWhere('CY 10111'), 'Bellville')
  });
});
