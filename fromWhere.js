const assert = require('assert')
function fromWhere(regNumber) {
  switch(regNumber.substring(0,2)) {
    case 'CY':
      return 'Bellville';
    case 'CJ':
      return 'Paarl';
    case 'CA':
      return 'Cape Town';
    default:
      return 'Some other place';
  }
}

console.log(fromWhere('CY 10111'));
assert.equal(fromWhere('CY 10111'), 'Bellville');
assert.equal(fromWhere('CJ 22558'), 'Paarl');
assert.equal(fromWhere('CA 55886'), 'Cape Town');
assert.equal(fromWhere('LP 100110'), 'Some other place');

module.exports = fromWhere;
