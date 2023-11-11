const expect = require("chai").expect;
const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}


describe('choosingType',function () {
    it('shoud throw an error if years is less than 1900',function (){
     expect(()=> chooseYourCar.choosingType("Sedan",'red',1899).to.throw('Invalid Year!'));
    });
    it('shoud throw an error if years is more than 2022',function (){
        expect(()=> chooseYourCar.choosingType("Sedan",'red',2023).to.throw('Invalid Year!'));
       });
    it('should throw an error if the type is not Sedan', function () {
        expect(()=> chooseYourCar.choosingType("petra",'red',1993).to.throw("This type of car is not what you are looking for."));
    })
    it('should return a specific string if is greater or equal 2010', function () {
        expect( chooseYourCar.choosingType("Sedan",'red',2010)).to.equal("This red Sedan meets the requirements, that you have.");
    })
    it('should return a specific string if is not great or equal 2010', function () {
        expect( chooseYourCar.choosingType("Sedan",'red',2009)).to.equal("This Sedan is too old for you, especially with that red color.");
    })
    
});
describe('brandName', function (){
  it('should have an array at first parameter',function () {
    expect(()=> chooseYourCar.brandName('petra', 3).to.throw('Invalid Information!'));
  });
  it('should have an index at second parameter',()=>{
    expect(()=> chooseYourCar
    .brandName({a:["Toyota", "Peugeot"]},-2)
    .to.throw('Invalid Information!'));
  });
  it('should have an index at second parameter',()=> {
    expect(()=> chooseYourCar
    .brandName(["Toyota","Peugeot"],2)
    .to.throw('Invalid Information!'));
  });
  it('should have an index at second parameter',()=>{
    expect(()=> chooseYourCar
    .brandName(["Toyota","Peugeot"],0)
    .to.throw('Invalid Information!'));
  });
  it('should have an index ot second parameter',()=>{
    expect(()=> chooseYourCar.brandName(["Toyota", "Peugeot"],0.1).to.throw('Invalid Information!'));
  });
  it('should have an index and not a string as second parameter',()=>{
    expect(()=> chooseYourCar
    .brandName(["BMW", "Toyota", "Peugeot"],'0')
    .to.throw('Invalid Information!'));
  });
  it('should work with parameters right ',function () {
    expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],0)).to.equal("Toyota, Peugeot");
  });
  it('should work with parameters right ',function () {
    expect(chooseYourCar.brandName(["BMW", 'Audi',"Toyota", "Peugeot"],1)).to.equal("BMW, Toyota, Peugeot");
  });
  it('should work with parameters right ',function () {
    expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot",'Audi',"Mercedes"],3)).to.equal("BMW, Toyota, Peugeot, Mercedes");
  });
});
describe('CarFuelConsumption',function(){
    it('should return a specific string if the fuel is less and equal 7l ',function () {
        expect(chooseYourCar.carFuelConsumption(100,7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
      });
      it('should return a specific string if is not less or equal 7',function () {
        expect(chooseYourCar.carFuelConsumption(100,10)).to.equal("The car burns too much fuel - 10.00 liters!");
      });
      it('should not work with first parameter string', ()=> {
        expect(()=> chooseYourCar.carFuelConsumption("100",10).to.throw("Invalid Information!"));
      });
      it('should not work with second parameter string',() => {
        expect(()=> chooseYourCar.carFuelConsumption(100,"10").to.throw("Invalid Information!"));
      });
      it('should not work with first parameter is less or equal 0',()=>{
        expect(()=> chooseYourCar.carFuelConsumption(0,10).to.throw("Invalid Information!"));
      });
      it('should not work with second parameter is less or equal 0',()=> {
        expect(()=> chooseYourCar
        .carFuelConsumption(100,-1)
        .to.throw("Invalid Information!"));
      });
      it('should return a specific string if the fuel is less and equal 7l ',function () {
        expect(chooseYourCar.carFuelConsumption(100,6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
      });
      it('should return a specific string if is not less or equal 7',function () {
        expect(chooseYourCar.carFuelConsumption(100,8.2)).to.equal("The car burns too much fuel - 8.20 liters!");
      });

    
});
