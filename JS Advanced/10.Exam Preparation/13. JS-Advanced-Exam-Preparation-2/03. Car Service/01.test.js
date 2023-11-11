const chai = require("chai");

const carService = require("./03. Car Service");

describe("isItExpencive", function () {
  it('should return if thee issue is "Engine"', function () {
    chai
      .expect(carService.isItExpensive("Engine"))
      .to.equal(
        `The issue with the car is more severe and it will cost more money`
      );
  });
  it('should return if thee issue is "Transmission"', function () {
    chai
      .expect(carService.isItExpensive("Engine"))
      .to.equal(
        `The issue with the car is more severe and it will cost more money`
      );
  });
  it('should return if thee issue is "Coop"', function () {
    chai
      .expect(carService.isItExpensive("Coop"))
      .to.equal(`The overall price will be a bit cheaper`);
  });
  it('should return if thee issue is "Lidl"', function () {
    chai
      .expect(carService.isItExpensive("Lidl"))
      .to.equal(`The overall price will be a bit cheaper`);
  });
});

describe("discount", function () {
  it("should not work with inputs tha are not numbers", function () {
    chai.expect(() => carService.discount("5", 5).to.throw("Invalid input"));
  });

  it("should not work with inputs tha are not numbers", function () {
    chai.expect(() => carService.discount(5, "5").to.throw("Invalid input"));
  });
  it("should not work with inputs tha are not numbers", function () {
    chai.expect(() => carService.discount("5", "5").to.throw("Invalid input"));
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(carService.discount(2, 10))
      .to.equal("You cannot apply a discount");
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(carService.discount(7, 100))
      .to.equal("Discount applied! You saved 15$");
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(carService.discount(8, 100))
      .to.equal("Discount applied! You saved 30$");
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(carService.discount(1, 100))
      .to.equal("You cannot apply a discount");
  });
});
describe("discount", function () {
  it("should not work with inputs tha are not arrays", function () {
    chai.expect(() =>
      carService.partsToBuy("5", "5").to.throw("Invalid input")
    );
  });
  it("should not work with one input tha are not arrays", function () {
    chai.expect(() =>
      carService.partsToBuy([{}], "5").to.throw("Invalid input")
    );
  });
  it("should not work with second input tha are not arrays", function () {
    chai.expect(() => carService.partsToBuy(5, [{}]).to.throw("Invalid input"));
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(
        carService.partsToBuy(
          [{ part: "blowoff valve", price: 145 }],
          [{ part: "coil springs", price: 230 }]
        )
      )
      .to.equal(0);
  });
  it("should  work with correct inputs", function () {
    chai
      .expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "injectors"]
        )
      )
      .to.equal(145);
  });
});
