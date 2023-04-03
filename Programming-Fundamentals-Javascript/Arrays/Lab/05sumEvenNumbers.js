function sumEvenNumbers(params) {
    let sum = 0;
  for (let i = 0; i < params.length; i++) {
     params[i] = Number(params[i]);
      let n = Number(params[i])
     if(n % 2 === 0){
        sum+=n
     } else {
        continue;
     }
  }
   console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6'])