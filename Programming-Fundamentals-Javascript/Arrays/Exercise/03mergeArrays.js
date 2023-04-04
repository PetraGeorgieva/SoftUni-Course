function mergeArray(input,array) {
  let newArray = [];
  let numToEnterTheNewArray;
  for (let i = 0; i < input.length; i++) {
    let numOfFirsArray =  Number(input[i]);
    let numOfsecondArray = Number(array[i]);
    if (i % 2 === 0){
     numToEnterTheNewArray = numOfFirsArray + numOfsecondArray;
     newArray[i] = numToEnterTheNewArray;
    }else {
        numToEnterTheNewArray = `${numOfFirsArray}${numOfsecondArray}`;
        numToEnterTheNewArray = Number(numToEnterTheNewArray);
        newArray[i] = numToEnterTheNewArray
    }
    
  }
   console.log(newArray.join(' - '))
}
mergeArray(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)