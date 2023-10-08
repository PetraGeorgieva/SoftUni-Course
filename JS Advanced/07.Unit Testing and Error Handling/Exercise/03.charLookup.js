const chai = require("chai");
const { describe } = require("mocha");
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("lookupChar works correctly",function () {
    it('take strings ', function (){
        let string1 = 'petra'
        let string2 = 4;
        let string3 = {a:5};
        let string4 = [1,2,3]
   
       let result1 = lookupChar(string1,2)
       let result2 = lookupChar(string2,3)
       let result3 = lookupChar(string3,1)
       let result4 = lookupChar(string4,2)
       
       chai.expect(result1).to.equal("t")
       chai.expect(result2).to.be.undefined
       chai.expect(result3).to.be.undefined
       chai.expect(result4).to.be.undefined
      })
      it('shout have a right index to work', function (){
        let string1 = 'petra'
        let string2 = 'alessio';
        let string3 = 'mamma';
        let string4 = 'sorry';
        let string5 = 'sorry';
        let string6 = 'sorry';

   
       let result1 = lookupChar(string1,-1)
       let result2 = lookupChar(string2,7)
       let result3 = lookupChar(string3,1)
       let result4 = lookupChar(string4,2.2)
       let result5 = lookupChar(string5,"2.2")
       let result6 = lookupChar(string6,"2")
       
       chai.expect(result1).to.equal("Incorrect index")
       chai.expect(result2).to.equal("Incorrect index")
       chai.expect(result3).to.equal("a");
       chai.expect(result4).to.be.undefined
       chai.expect(result5).to.be.undefined
       chai.expect(result6).to.be.undefined

      })
      it('should word correctly',function (){
        let strin1 = 'petra';
        let strin2 = 'helloSoftuni';
        let strin3 = 'lasciatemiCantare';

        let res1 = lookupChar(strin1,0)
        let res2 = lookupChar(strin2,11)
        let res3 = lookupChar(strin3,8)
        chai.expect(res1).to.equal("p");
        chai.expect(res2).to.equal("i");
        chai.expect(res3).to.equal("m");

      })
      it('should not work with incorect index and not a string', function (){
        let string1 =  5;
        let string2 =  [1,2,3];
        let string3 = 'petra'
        let index1 = 5;
        let index2 = 100;
        let index3 = 3

        let res1 = lookupChar(string1,index1);
        let res2 = lookupChar(string2,index2);
        let res3 = lookupChar(string3,index3);

        chai.expect(res1).to.be.undefined
        chai.expect(res2).to.be.undefined
        chai.expect(res3).to.equal("r");


      })


})

