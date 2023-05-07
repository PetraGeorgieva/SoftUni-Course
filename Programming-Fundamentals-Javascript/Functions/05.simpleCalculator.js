function calculator(a, b, operator) {
   let add =  (a, b) => a + b;
   let multiply = (a, b) => a * b;
   let divide = (a, b) => a / b;
   let subtract = (a, b) => a - b;
    if(operator === 'add'){
      console.log(add(a,b));
    } else if (operator === 'multiply'){
      console.log(multiply(a,b));
    }else if (operator === 'divide'){
      console.log(divide(a,b));
    } else{
      console.log(subtract(a,b));
    }
   }
   calculator(5,5,'divide');