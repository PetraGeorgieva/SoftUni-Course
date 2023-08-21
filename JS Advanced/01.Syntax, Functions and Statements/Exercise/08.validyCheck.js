function validyCheck(x1, y1, x2, y2) {
    let first = check(x1, y1, 0, 0);
    let second = check(x2, y2, 0, 0);
    let third = check(x1, y1, x2, y2);
   
   
   
  function check(x, y, x3, y3) {
    let result  = Math.sqrt(((x3-x)*(x3-x))+((y3-y)*(y3-y)))
    if (Number.isInteger(result)){
        console.log(`{${x}, ${y}} to {${x3}, ${y3}} is valid`);
    } else {
       console.log(`{${x}, ${y}} to {${x3}, ${y3}} is invalid`);
    }
  }
       
}
validyCheck(2, 1, 1, 1)