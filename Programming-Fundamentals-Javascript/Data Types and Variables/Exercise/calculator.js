function calculator (number,operator,anotherNumber) {
  let result = 0;
   if (operator === "+"){
     result = number + anotherNumber;
     console.log (`${result.toFixed(2)}`);
   } else if (operator === "-") {
      result = number - anotherNumber;
      console.log (`${result.toFixed(2)}`);
   } else if (operator === "/") {
      result = number / anotherNumber;
      console.log (`${result.toFixed(2)}`);
   } else if (operator === "*") {
      result = number * anotherNumber;
      console.log (`${result.toFixed(2)}`);
   }
}
calculator(25.5,
   '-',
   3)