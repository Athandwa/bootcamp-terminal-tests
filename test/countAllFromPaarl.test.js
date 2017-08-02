const assert = require('assert');
var countAllPaarl = require('../countAllFromPaarl.js');
describe('countAllPaarl', function () {
  it("should return '2' when given 'regFromPaarl[i].startsWith('CJ')'", function () {
    assert.equal(countAllPaarl('CY 115544, CJ 225555, CA 115547, ND 448852, CJ 5588225'), 2);
  });
});
