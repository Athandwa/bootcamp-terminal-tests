const assert = require('assert');
var isFromPaarl = require('../isFromPaarl.js');
describe('isFromPaarl', function() {
    it("should return 'true' when given 'registration.startsWith('CJ 98912')'", function() {
        assert.equal(isFromPaarl('CJ 98912'), true);
    });
});
