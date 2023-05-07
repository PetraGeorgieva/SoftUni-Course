function charactersInRage(a, b) {
  let firstcharacter = fromcharToNumber(a)
  let secondcharacter = fromcharToNumber(b)
  let result = ''

  let startIndex = thesmallestNumber(firstcharacter, secondcharacter);
  let endIndex = biggestOfNumbers(firstcharacter, secondcharacter)
  
   return iterationBetweenTwoNumbers(startIndex,endIndex,result);

  function iterationBetweenTwoNumbers(start,end,result){
  for (let i = start + 1; i < end; i++) {
    result = concatenateString(result, convertFromNumberToChar(i));
      }
       return result;
  }

  function concatenateString(result, string) {
    result += string + " "
    return result;
  }

  function convertFromNumberToChar(num) {
    return String.fromCharCode(num)
  }

  function fromcharToNumber(char) {
    return char.charCodeAt(0);
  }

  function thesmallestNumber(n1, n2) {
    return (Math.min(n1, n2));
  }
  function biggestOfNumbers(n1, n2) {
    return (Math.max(n1, n2));
  }
}
console.log(charactersInRage('a', 'd'));