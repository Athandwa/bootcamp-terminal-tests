const assert = require('assert');
function countRegNumber(registration) {
    var regList = registration.split(',');
      return regList.length;
}
console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));
assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

module.exports = countRegNumber;
