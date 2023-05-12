function addAndSubtract (array) {
  let sumOfInitialArray = 0;
  let newarray =[];
  let sumOfNewArray = 0;
   for (let i = 0; i < array.length; i++) {
       let num = Number(array[i]);
       sumOfInitialArray+=num;
       
       if (num % 2 === 0) {
        num = num + i
        newarray[i] = num
        sumOfNewArray+=num
       } else {
         num = num-i
         newarray[i] = num
         sumOfNewArray+=num
       }
   }
      console.log(newarray);
      console.log(sumOfInitialArray);
      console.log(sumOfNewArray)
}
addAndSubtract([-5, 11, 3, 0, 2]);