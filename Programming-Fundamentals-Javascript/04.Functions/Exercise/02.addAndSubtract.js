
function sumAndSubtract(a,b,c) {
    let sum = sumTwoNumber(a,b);
    let subtract =  subtractTwoNumber(sum,c);
    return subtract;
 function sumTwoNumber(a,b){
    return a+b
 }
  function subtractTwoNumber(a, b){
    return a-b;
}
}
console.log(sumAndSubtract(23,6,10));