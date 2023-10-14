const chai =  require('chai');

function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Symetrical Array Test', function () {
    it('if arguments is numberArg and not array. should throw false', function () {
        //Arrange
        
        let arr = 5;
        let arr2 = ['petra','alessio','petra'];
        //Act

        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)

        // Assert

        chai.expect(result).to.be.false
        chai.expect(result2).to.be.true
    })
    it('if arguments is obj and not array, should throw false', function () {
        //Arrange
        let arr = {a:3}
        let arr2 = [1,2,1]
       
        //Act
        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)
        
        // Assert
        chai.expect(result).to.be.false;
        chai.expect(result2).to.be.true;
    })
    it('if arguments is stringArg and not array', function () {
        //Arrange
        let arr = "petra";
        let arr2 = [0,0,0]
        //Act
        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)
        // Assert
        chai.expect(result).to.be.false
        chai.expect(result2).to.be.true
    })
    it('if array of numbers is symetrical . should return true', function () {
        //Arrange
        let arr = [1,2,1];
        let arr2 = [1,2,3];
        //Act
        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)
        // Assert
        chai.expect(result).to.be.true
        chai.expect(result2).to.be.false
    })
    it('if array of strings is symetrical . should return true', function () {
        //Arrange
        let arr = ['petra','alessio','petra'];
        let arr2 = ['dimitrina','alessio','petra'];
        //Act
        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)
        // Assert
        chai.expect(result).to.be.true
        chai.expect(result2).to.be.false
    })
    it('if array of obj is symetrical . should return true', function () {
        //Arrange
        let arr = [{a:1},{b:2},{a:1}];
        let arr2 = [{a:1},{b:2},{c:1}];
        //Act
        let result = isSymmetric(arr)
        let result2 = isSymmetric(arr2)
        // Assert
        chai.expect(result).to.be.true
        chai.expect(result2).to.be.false
    })

})