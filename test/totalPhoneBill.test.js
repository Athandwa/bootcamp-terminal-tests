const assert = require('assert');
var totalPhoneBill = require('../totalPhoneBill.js');
describe('totalPhoneBill', function () {
  it("should return '7.45' when given 'total.toFixed(2)'", function () {
    assert.equal(totalPhoneBill, 7.45);
  });
});
