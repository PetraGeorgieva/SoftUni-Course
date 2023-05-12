function numberIntoArray (num){

function numbertoString (num){
 let numToString = num+=''
  return numToString.split('');
}
let newArray = numbertoString(num)
let stringtoNumbers = 0;
let newArrayOfNumbers = []
 for (let i = 0 ; i < newArray.length; i++){
    stringtoNumbers = Number(newArray[i]);
     newArrayOfNumbers.push(stringtoNumbers);
 }
   newArray = newArrayOfNumbers;
   return newArray 
 
}
console.log(numberIntoArray(1000435));