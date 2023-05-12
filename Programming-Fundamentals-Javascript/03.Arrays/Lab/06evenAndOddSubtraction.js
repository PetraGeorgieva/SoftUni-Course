function evenAndOddSubtraction(params) {
    let sumEven = 0;
    let sumOdds = 0;

  for (let i = 0; i < params.length; i++) {
     params[i] = Number(params[i]);
      let n = Number(params[i])
     if(n % 2 === 0){
        sumEven+=n
     } else {
        sumOdds+=n
     }
  }
   console.log(sumEven - sumOdds)
}
evenAndOddSubtraction([1,2,3,4,5,6])