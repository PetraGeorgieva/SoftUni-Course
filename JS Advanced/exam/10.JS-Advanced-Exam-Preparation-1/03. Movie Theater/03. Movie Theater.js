const expect = require("chai").expect;
const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};

describe("ageRestrictions", function () {
  it('it should work correctly with "G" ', function () {
    expect(movieTheater.ageRestrictions("G")).to.equal(
      "All ages admitted to watch the movie"
    );
  });
  it('it should work correctly with "PG" ', function () {
    expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
  });
  it('it should work correctly with "R" ', function () {
    expect(movieTheater.ageRestrictions("R")).to.equal(
      "Restricted! Under 17 requires accompanying parent or adult guardian"
    );
  });
  it('it should work correctly with "NC-17" ', function () {
    expect(movieTheater.ageRestrictions("NC-17")).to.equal(
      "No one under 17 admitted to watch the movie"
    );
  });
  it('it should work correctly with 6 ', function () {
    expect(movieTheater.ageRestrictions(6)).to.equal(
      "There are no age restrictions for this movie"
    );
  });
});
describe("moneySpent",function () {
  it("should not work if the input one is not correct", () => {
    expect(() =>
      movieTheater
        .moneySpent("6", ["Nachos", "Popcorn"], ["Water", "Soda"])
        .to.throw("Invalid input")
    );
  });
  it("should not work if the input two is not correct", () => {
    expect(() =>
      movieTheater
        .moneySpent(1, {}, ["Water", "Soda"])
        .to.throw("Invalid input")
    );
  });
  it("should not work if the input three is not correct", () => {
    expect(() =>
      movieTheater.moneySpent(1, ["Nachos"], 6).to.throw("Invalid input")
    );
  });
  it("should not work if all inputs are not correct", () => {
    expect(() =>
      movieTheater.moneySpent({}, 4, 9).to.throw("Invalid input")
    );
  });
  it("should work correctly with correct input", () => {
    expect(
      movieTheater
        .moneySpent(1, ["Nachos", "Popcorn"], ["Water", "Soda"]))
        .to.equal("The total cost for the purchase is 29.50")
    
  });
  it("should do discount if is more than 50", () => {
    expect(() =>
      movieTheater
        .moneySpent(3, ["Nachos", "Popcorn"], ["Water", "Soda"]))
        .to.equal(
          "The total cost for the purchase with applied discount is 47.60"
        )
   
  });
});
describe("reservation",function () {
  it("should not work with wrong first input", () => {
    expect(() => movieTheater.reservation({}, 6).to.throw("Invalid input"));
  });
  it("should not work with wrong second input", () => {
    expect(() =>
      movieTheater
        .reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          "2"
        )
        .to.throw("Invalid input")
    );
  });
  it("should not work with wrong evry input ", () => {
    expect(() =>
      movieTheater.reservation([{ a: 2 }], {}).to.throw("Invalid input")
    );
  });
  it("should work correctly ", function () {
    expect(
      movieTheater
        .reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          1
        ))
        .to.equal(2)
  });
  it("should work correctly with empty array ", function () {
    expect(movieTheater.reservation([],1)).to.be.infinite
  });
});