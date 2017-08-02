const assert = require('assert');
 function yearsAgo(year) {
  var today = new Date();
  return today.getFullYear() - year;

}
console.log(yearsAgo(1992));
assert.equal(yearsAgo(1992), '25');
module.exports = yearsAgo;
