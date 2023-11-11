function reservation(rowsArray, neededSeatsCount) {
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
}
console.log(reservation([{ rowNumber: 1, freeSeats: 7 } ],7))
