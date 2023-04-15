function maxSequenceofEqualElements(array) {
  let longestsec = [];
  let resultsec = [];
  let counter = 0;
  for (i = 0; i < array.length; i++) {
      if (counter === 0) {
          resultsec.push(array[i]);
      }
      if (array[i] === array[i + 1]) {
          counter++;
          resultsec.push(array[i+1]);
          if (resultsec.length > longestsec.length) {
              longestsec = resultsec;
          }
      } else {
          resultsec = [];
          counter = 0;
      }
  }
  console.log(longestsec.join(" "));
}
maxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])