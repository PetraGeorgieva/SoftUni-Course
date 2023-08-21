function gcd(a,b) {
    let maxDivisor = 0;
    let commonMaxDivisor = 0;
    if(a > b){
   maxDivisor = a
    }else{
  maxDivisor = b
    }
  for (let i = 1; i < maxDivisor; i++) {
      if(a % i === 0 && b % i === 0){
       commonMaxDivisor = i
      }
  }
  console.log(commonMaxDivisor)
}
gcd(2154,458)