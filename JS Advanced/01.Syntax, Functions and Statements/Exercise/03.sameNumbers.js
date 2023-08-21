function equalNumbers(n){
 let isTrue = true;
 let string = n.toString();
 let result = 0;
for (let i = 0; i < string.length-1; i++) {
   let first = string[i];
   let second = string[i+1]
   if(first!= second){
    isTrue = false
   } 
}
for (let letters  of string) {
   let number = Number(letters);
   result+=number
}
console.log(isTrue)
console.log(result)
}
equalNumbers(222322);