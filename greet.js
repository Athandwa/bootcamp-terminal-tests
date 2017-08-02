const assert = require('assert');
function greet(name) {
  return "Hi" + name;
}
console.log(greet(' Bob!'));
assert.equal(greet(' Bob!'), 'Hi Bob!');

module.exports = greet;
