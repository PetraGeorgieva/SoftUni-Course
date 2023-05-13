function bombNumbers(input,specialBombNumbers) {
  let bombnumberIs = specialBombNumbers[0]
  let powerOfTheBomb = specialBombNumbers[1]
  let result = 0;
  while(input.includes(bombnumberIs)){
    let index = input.indexOf(bombnumberIs)
    input.splice(index-powerOfTheBomb >= 0 ? index-powerOfTheBomb:0 ,powerOfTheBomb*2+1);// 
  } 
  for(let num of input){
    result+=num
  }
    console.log(result);
  }
  bombNumbers([2, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
     );