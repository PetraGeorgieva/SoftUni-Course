function nonDecreasingSubset(array) {
  let newarray = [];
  let minNumber = Number.MIN_SAFE_INTEGER
  for(let i = 0; i < array.length; i++){
    let numbers = Number(array[i]);
    if (numbers >= minNumber ){
        minNumber = numbers
        newarray.push(numbers)
    }
  } console.log(newarray.join(' '))
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])
