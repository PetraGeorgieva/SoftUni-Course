function reverseInPlace(arrays) {

   for (i = 0 ; i <= arrays.length /2; i++){
         let oldElement = arrays[i];
         let previousIndex = arrays.length -1 -i;
         arrays[i] = arrays[previousIndex];
         arrays[previousIndex] = oldElement;
   
   }
   console.log(arrays.join(' '));
}
let input = ['a', 'b', 'c', 'd', 'e']
reverseInPlace(input)