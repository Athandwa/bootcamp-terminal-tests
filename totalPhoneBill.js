const assert = require('assert')
function totalPhoneBill(phoneBill) {
    var billList = phoneBill.split(',');
    var total = 0;

  for(var i=0; i<billList.length; i++){

    if(billList[i] === 'call'){
        total = total + 2.75;
      }
    else if(billList[i] === 'sms'){
        total = total + 0.65;
    }
  }
        return total.toFixed(2);
}
console.log(totalPhoneBill('call,sms,call,sms,sms'));
var totalPhoneBill = totalPhoneBill('call,sms,call,sms,sms');
console.log(totalPhoneBill);
assert.deepEqual(totalPhoneBill, 7.45);
module.exports = totalPhoneBill;
