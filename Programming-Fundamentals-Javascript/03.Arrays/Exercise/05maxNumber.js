function maxNumber(array) {
   let newArray =[];

   while(array.length !== 0) {                                    
    let current = array.shift()  // array.shift() Removes the first element from an array and returns it
    let biggest = Math.max(...array)// Math.max(...array)Returns the larger of a set of supplied numeric expressions
    if(current > biggest) {
      newArray.push(current); 
       }            
       }
       console.log(newArray.join(' '));
   }    

maxNumber([41, 41, 34, 20]);
