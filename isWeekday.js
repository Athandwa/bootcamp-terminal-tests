function isWeekday(Day) {
  return !Day.startsWith('S');
}
 console.log(isWeekday('Monday'));
const assert = require('assert');
assert.equal(isWeekday('Monday'), true);

module.exports = isWeekday;
