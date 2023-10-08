const chai = require("chai");

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
 describe('addFive',function (){
    it('should return correct with numbers',function (){
        let result1 =   mathEnforcer.addFive(5.1)
        let result2 =   mathEnforcer.addFive(5)
        let result3 =   mathEnforcer.addFive(-5)
        let result10 =   mathEnforcer.addFive([1,2])
        let result14 =   mathEnforcer.addFive(-5.5)
        let result6 =   mathEnforcer.addFive('5')

        chai.expect(result1).closeTo(10.1,0.01)
        chai.expect(result2).to.equal(10)
        chai.expect(result3).to.equal(0)
        chai.expect(result10).to.be.undefined
        chai.expect(result14).closeTo(-0.5,0.01)
        chai.expect(result6).to.be.undefined
    })

 })
describe("subtractTen",function () {
  it('obj functions should take a number to work correctly', function (){
    
 
  let result4 =   mathEnforcer.subtractTen(3.5)
  let result5 =   mathEnforcer.subtractTen(30)
  let result6 =   mathEnforcer.subtractTen(-80)
  let result11 =   mathEnforcer.subtractTen({a:4})
  let result15 =   mathEnforcer.subtractTen(-80.1)
  let result1 =   mathEnforcer.subtractTen('5')
  

  
  chai.expect(result4).closeTo(-6.5,0.01)
  chai.expect(result5).to.equal(20)
  chai.expect(result6).to.equal(-90)
  chai.expect(result11).to.be.undefined
  chai.expect(result15).closeTo(-90.1,0.01)
  chai.expect(result1).to.be.undefined


  })


});
describe("sum",function () {
    it('obj functions should take a number to work correctly', function (){
      

        let result7 =   mathEnforcer.sum(8.7,7.5) // floating point
        let result8 =   mathEnforcer.sum(7,5) // positiv 
        let result9 =   mathEnforcer.sum(-7,-25) // negativ 
        let result12 =   mathEnforcer.sum([1,2],3) // one negativ
        let result13=   mathEnforcer.sum(3,{a:4})  // one negativ
        let result16 =   mathEnforcer.sum(-7.1,-25.2) // floating negativ 
        let result1 =   mathEnforcer.sum('5','6') // string
  
        chai.expect(result7).closeTo(16.2,0.01)
        chai.expect(result8).to.equal(12)
        chai.expect(result9).to.equal(-32)
        chai.expect(result12).to.be.undefined
        chai.expect(result13).to.be.undefined
        chai.expect(result16).closeTo(-32.3,0.01)
        chai.expect(result1).to.be.undefined
  
  
    })

  
  });
 



