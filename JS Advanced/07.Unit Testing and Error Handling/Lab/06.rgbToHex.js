const chai = require("chai");

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor Test',function () {
    it('with no integer red,should trow error',function (){
        //Arange
        let reds1 = 12.5;
        let reds2 = "100";
        let reds3 = 0;
        let reds4 = -1;
        let reds5 = 256;
        let reds6 = 255;
        let  greens = 100;
        let blues = 100;
        //Act
        let result1 =  rgbToHexColor(reds1,greens,blues);
        let result2 = rgbToHexColor(reds2,greens,blues);
        let result3 = rgbToHexColor(reds3,greens,blues);
        let result4 = rgbToHexColor(reds4,greens,blues);
        let result5  = rgbToHexColor(reds5,greens,blues);
        let result6  = rgbToHexColor(reds6,greens,blues);
        // Assert
        chai.expect(result1).to.be.undefined;
        chai.expect(result2).to.be.undefined;
        chai.expect(result3).to.equal("#006464");
        chai.expect(result4).to.be.undefined;
        chai.expect(result5).to.be.undefined;
        chai.expect(result6).to.equal("#FF6464");
    })
    it('with no integer green,should trow error',function (){
              //Arange
              let greens1 = 12.5;
              let greens2 = "100";
              let greens3 = 0;
              let greens4 = -1;
              let greens5 = 256;
              let greens6 = 255;
              let  reds = 100;
              let blues = 100;
              //Act
              let result1 =  rgbToHexColor(reds,greens1,blues);
              let result2 = rgbToHexColor(reds,greens2,blues);
              let result3 = rgbToHexColor(reds,greens3,blues);
              let result4 = rgbToHexColor(reds,greens4,blues);
              let result5  = rgbToHexColor(reds,greens5,blues);
              let result6  = rgbToHexColor(reds,greens6,blues);
              // Assert
              chai.expect(result1).to.be.undefined;
              chai.expect(result2).to.be.undefined;
              chai.expect(result3).to.equal("#640064");
              chai.expect(result4).to.be.undefined;
              chai.expect(result5).to.be.undefined;
              chai.expect(result6).to.equal("#64FF64");
    })
    it('with no integer blue,should trow error',function (){
          //Arange
          let blues1 = 12.5;
          let blues2= "100";
          let blues3 = 0;
          let blues4  = -1;
          let blues5 = 256;
          let blues6 = 255;
          let  reds = 100;
          let greens = 100;
          //Act
          let result1 =  rgbToHexColor(reds,greens,blues1);
          let result2 = rgbToHexColor(reds,greens,blues2);
          let result3 = rgbToHexColor(reds,greens,blues3);
          let result4 = rgbToHexColor(reds,greens,blues4);
          let result5  = rgbToHexColor(reds,greens,blues5);
          let result6  = rgbToHexColor(reds,greens,blues6);
          // Assert
          chai.expect(result1).to.be.undefined;
          chai.expect(result2).to.be.undefined;
          chai.expect(result3).to.equal("#646400");
          chai.expect(result4).to.be.undefined;
          chai.expect(result5).to.be.undefined;
          chai.expect(result6).to.equal("#6464FF");
       })
    it('with integer number in range [0-250] should work corectly',function (){
        //Arange
        let reds = 0;
        let  greens = 250;
        let blues = 100;
        //Act
        let result =  rgbToHexColor(reds,greens,blues);
        // Assert
        chai.expect(result).to.equal("#00FA64")
    }) 
     

})