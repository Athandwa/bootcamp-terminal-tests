const assert = require('assert')
function isFromPaarl(registration) {
  results = registration.startsWith('CJ');
  return results;
}
console.log(isFromPaarl('CJ 98912'));
assert.equal(isFromPaarl('CJ 98912'), true);

module.exports = isFromPaarl;
