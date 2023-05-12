function oddAndEvenSum(num){
   function splitNumber(num){
    return String(num).split('').map(item => Number(item))
   }
    let newarray = splitNumber(num)
    let sumOdd = 0;
    let sumEven = 0;
    let number = 0;
    for (let i = 0; i < newarray.length; i++) {
        number = Number(newarray[i]);
        if (number % 2 === 0 ){
           sumEven+=number
        }else {
           sumOdd+=number
        }
    }
       console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
   }
oddAndEvenSum(1000435)