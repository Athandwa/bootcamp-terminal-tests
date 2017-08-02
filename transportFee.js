const assert = require('assert')
function transportFee(shift) {
  switch(shift) {
    case 'morning':
      return 'R20';
    case 'afternoon':
      return 'R10';
    default:
      return 'You pay nothing';
  }
}
console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('nightshift'));

assert.equal(transportFee('morning'), 'R20');
assert.equal(transportFee('afternoon'), 'R10');
assert.equal(transportFee('nightshift'), 'You pay nothing');
module.exports = transportFee;
