function memoryGame(params) {
   let element = params.shift().split(' ')
   i = 0;
   let counter = 0;
   while(params[i]!== "end"){
      let [index,secondIndex] = params[i].split(' ').map((x)=>Number(x));
      if (element[index] === element[secondIndex] && index !== secondIndex ){
          counter++
       let removedElement = element.splice(index,1);
       if (index < secondIndex){
          removedElement = element.splice(secondIndex-1,1);
       } else{
          removedElement = element.splice(secondIndex,1);
       }
       
console.log(`Congrats! You have found matching elements - ${removedElement}!`)
      } else if(index <0 || secondIndex < 0 || index >= element.length && secondIndex >= element.length ||index >= element.length || secondIndex >= element.length || index < 0 && secondIndex < 0 || index === secondIndex){
          counter++
          console.log("Invalid input! Adding additional elements to the board");
          let halfparams = Math.ceil(element.length /2)
          let result = `-${counter}a`
          element.splice(halfparams,0,result,result);
          
      } else if (element[index] !== element[secondIndex]){
          console.log('Try again!')
      }

      if(element.length <= 0){
   console.log(`You have won in ${counter} turns!`)
   return;
      }
      i++
      params[i]
   }
   if(element.length >0){
      console.log(`Sorry you lose :(`); 
      console.log(`${element.join(' ')}`);
   } else{
      console.log(`You have won in ${counter} turns!`)
   }
}
memoryGame([
   "a 2 4 a 2 4", 
   "4 0", 
   "0 2",
   "1 1",
   "0 1", 
   "end"
   ]
     
   )