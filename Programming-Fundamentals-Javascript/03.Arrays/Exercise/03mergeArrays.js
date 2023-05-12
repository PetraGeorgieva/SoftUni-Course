function mergeArray(input, array) {
  let newArray = [];

  for (let i = 0; i < input.length; i++) {

    if (i % 2 === 0) {
      let numOfFirsArray = Number(input[i]);
      let numOfsecondArray = Number(array[i]);
      newArray.push(numOfFirsArray + numOfsecondArray);
    } else if (i % 2 !== 0) {
      let numOfFirsArray = (input[i]);
      let numOfsecondArray = (array[i]);
      let numToEnterTheNewArray = `${numOfFirsArray}${numOfsecondArray}`;
      //numToEnterTheNewArray = (numToEnterTheNewArray);
      newArray[i] = numToEnterTheNewArray
    }

  }
  console.log(newArray.join(' - '))
}
mergeArray(["13", "1", "5", "77", "4", 7],
  ["22", "333", "5", "122", "44", 7]
)

