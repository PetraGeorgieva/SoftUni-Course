function searchForaNumber(params,input) {
    let numberToSelect = input[0];
    let numbersToDelete = input[1];
    let numberToSearch = input[2];
    let newArray =  params.splice(0,numberToSelect);
    newArray.splice(0,numbersToDelete);
    let counter = 0;
    for (let i = 0; i < newArray.length; i++) {
         if(newArray[i] === numberToSearch){
            counter++
         }
    }
      return `Number ${numberToSearch} occurs ${counter} times.`;
}
searchForaNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );