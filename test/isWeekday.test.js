const assert = require('assert');
var isWeekday = require('../isWeekday.js');
describe('isWeekday', function() {
  it("should return 'true' when given '!Day.startsWith('S')'", function (){
      assert.equal(isWeekday('Monday'), true);
  });
});
