const assert = require('assert');
function isFromBellville(registration) {
   var results = registration.startsWith('CY');
  return results;
}
console.log(isFromBellville('CY 523519'));
assert.equal(isFromBellville('CY 523519'), true);

module.exports = isFromBellville;
