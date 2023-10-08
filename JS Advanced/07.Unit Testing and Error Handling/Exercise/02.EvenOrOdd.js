const chai = require('chai');
const { describe } = require('mocha');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven work correctly', function () { 
   it('take strings ', function (){
     let string1 = 'petra'
     let string2 = 4;
     let string3 = {a:5};
     let string4 = [1,2,3]

    let result1 = isOddOrEven(string1)
    let result2 = isOddOrEven(string2)
    let result3 = isOddOrEven(string3)
    let result4 = isOddOrEven(string4)
    
    chai.expect(result1).to.equal("odd")
    chai.expect(result2).to.be.undefined
    chai.expect(result3).to.be.undefined
    chai.expect(result4).to.be.undefined
   })
   it('take strings and return even if is even', function (){
    let string1 = 'petras'
    let string2 = "cane";
    let string3 =  "abcd"
    let string4 =   "yess"

   let result1 = isOddOrEven(string1)
   let result2 = isOddOrEven(string2)
   let result3 = isOddOrEven(string3)
   let result4 = isOddOrEven(string4)
   
   chai.expect(result1).to.equal("even")
   chai.expect(result2).to.equal("even")
   chai.expect(result3).to.equal("even")
   chai.expect(result4).to.equal("even")
  })
  it('take strings and return odd if is odd', function (){
    let string1 = 'petra'
    let string2 = "Clara";
    let string3 =  "Alessio"
    let string4 =   "yes"

   let result1 = isOddOrEven(string1)
   let result2 = isOddOrEven(string2)
   let result3 = isOddOrEven(string3)
   let result4 = isOddOrEven(string4)
   
   chai.expect(result1).to.equal("odd")
   chai.expect(result2).to.equal("odd")
   chai.expect(result3).to.equal("odd")
   chai.expect(result4).to.equal("odd")
  })
  it('take strings and return odd if is odd', function (){
    let string1 = 4;
    let string2 = "cane";
    let string3 = {a:5};
    let string4 =   "yes"

   let result1 = isOddOrEven(string1)
   let result2 = isOddOrEven(string2)
   let result3 = isOddOrEven(string3)
   let result4 = isOddOrEven(string4)
   
   chai.expect(result1).to.be.undefined
   chai.expect(result2).to.equal("even")
   chai.expect(result3).to.be.undefined
   chai.expect(result4).to.equal("odd")
  })
  
});
