function cookingByNumbers(n,ar1,ar2,ar3,ar4,ar5) {
    let number = Number(n)
  let result = cook(n,ar1);
  let secondRes = cook(result,ar2);
  let third = cook(secondRes,ar3);
  let fourth = cook(third,ar4);
  let five = cook(fourth,ar5);

function cook(n,arg) {
    switch (arg){
        case 'chop':
           number/=2;
            break;
        case 'dice':
          number = Math.sqrt(number)
          break;
        case 'spice':
         number+=1
         break;
        case 'bake':
         number*=3
            break;
        case 'fillet':
            let percent = number*20/100;
            number-=percent
            break;

      }  
      console.log(number)
} 
    
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')