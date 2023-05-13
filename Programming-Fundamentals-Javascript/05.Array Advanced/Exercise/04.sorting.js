function sorting(input){
 input.
 sort((a,b) => b-a);
 let newArr =[];
while(input.length !== 0){
   let num = input.shift()
 newArr.push(num);
   let secondNum = input.pop()
 newArr.push(secondNum);
 }
 console.log(newArr.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);