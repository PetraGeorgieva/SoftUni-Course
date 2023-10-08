const chai = require("chai");

const sum = require('./04.sum');

describe('Sum test',function() {
   it('should sum integers correctly', function () {
      // Arange
      let arr = [1,2,3]
      //Act
      let result = sum(arr)
      //Assert
      chai.expect(result).to.equal(6);

   })
   it('should sum floating point numbers correctly', function () {
    // Arange
    let arr = [1.3,2,3.4]
    //Act
    let result = sum(arr)
    //Assert
    chai.expect(result).to.be.approximately(6.7,0.001);

 })
 it('should cast string to numbers correctly', function () {
    // Arange
    let arr = ["10","23"]
    //Act
    let result = sum(arr)
    //Assert
    chai.expect(result).to.be.equal(33);

 })
 it('should cast string to numbers correctly', function () {
    // Arange
    let arr = ["tw","23"]
    //Act
    let result = sum(arr)
    //Assert
    chai.expect(result).to.be.NaN;

 })
});