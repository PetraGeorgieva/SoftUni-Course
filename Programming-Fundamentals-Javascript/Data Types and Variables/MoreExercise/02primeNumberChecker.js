function primeNumberChecher (n) {
   if (n% n === 0 && n % 1 === 0 && n% 2 !==0 && n % 3 !== 0){
    console.log("true")
   }else {
    console.log("false")
   }
}
primeNumberChecher(81)