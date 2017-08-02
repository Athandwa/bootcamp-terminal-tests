const assert = require('assert')
function regCheck(regNo, Location) {
  return regNo.startsWith(Location);
}

console.log(regCheck('ND 10245 GP', 'GP'));
console.log(regCheck('LP 15525 L', 'L'));
console.log(regCheck('EP 10010 EC', 'EC'));
console.log(regCheck('PPM 2250 MP', 'MP'));
assert.equal(regCheck('ND 10245 GP', 'GP'), false);
assert.equal(regCheck('LP 15525 L', 'L'), true);

module.exports = regCheck;
