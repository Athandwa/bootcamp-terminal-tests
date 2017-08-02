const assert = require('assert');
var regCheck = require('../regCheck.js');
describe('regCheck', function() {
  it("should return 'true' when given 'regNo.startsWith(Location)'", function() {
    assert.equal(regCheck('LP 15525 L', 'L'), true);
  });
});
