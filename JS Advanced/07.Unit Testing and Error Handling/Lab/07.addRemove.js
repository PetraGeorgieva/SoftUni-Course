const chai = require("chai");
function createCalculator() {
   let value = 0;
   return {
       add: function(num) { value += Number(num); },
       subtract: function(num) { value -= Number(num); },
       get: function() { return value; }
   }
}

describe('Add / Subtract Test',function () {
 it('should return a modole object with function add,remove,get ',function (){
    

    let result  = createCalculator();
 
   let addIsTrue = result.hasOwnProperty('add');
   let subtractIsTrue = result.hasOwnProperty('subtract');
   let getIsTrue = result.hasOwnProperty('get');
   let oddsIsTrue = result.hasOwnProperty('odds');

    chai.expect(addIsTrue).to.be.true;
    chai.expect(subtractIsTrue).to.be.true;
    chai.expect(getIsTrue).to.be.true;
    chai.expect(oddsIsTrue).to.be.false;
    
 })
 it('The functions add() take a parameter that can be parsed as a number',function (){
    

   let result  = createCalculator();

   let testAdd = result.add('3');
   let expetions = result.get()

   chai.expect(expetions).to.equal(3);
   
})
it('The functions subtract() take a parameter that can be parsed as a number',function (){
    

   let result  = createCalculator();

   
   result.subtract('-1')
   let expetions = result.get()

   chai.expect(expetions).to.equal(1);
   
})
it('The functions get return the value of sum',function (){
    

   let result  = createCalculator();

   
   result.add('100')
   result.subtract('20')
   let expetions = result.get()

   chai.expect(expetions).to.equal(80);
   
})
});