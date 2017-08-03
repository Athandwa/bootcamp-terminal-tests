const assert = require('assert');
var countAllFromTown = require('../countAllFromTown.js');
describe('countAllFromTown', function () {
  it("should return '[ 'CL 124', 'CL 345', 'CL 341' ] []' when given 'regList[i].startsWith(location)'", function () {
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      assert.deepEqual(fromStellies, [ 'CL 124', 'CL 345', 'CL 341' ]);
  });
});
