const assert = require('assert');
var yearsAgo = require('../yearsAgo.js');
describe('yearsAgo', function() {
  it("should return '25' when given 'today.getFullYear()'", function() {
      assert.equal(yearsAgo(1992), '25');
  });
});
