function sumFirstAndLast(arr){
  let firstElement = arr.shift()
  let secondElement = arr.pop()
  let sum = Number(firstElement) + Number(secondElement)
  return sum;
}
sumFirstAndLast(['20','30','40']);
console.log(sumFirstAndLast(['20','30','40'])); 