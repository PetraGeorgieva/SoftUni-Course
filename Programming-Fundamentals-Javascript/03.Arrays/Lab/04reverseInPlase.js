function reverseInPlace(arrays) {

   for (i = 0 ; i < arrays.length /2; i++){  // arrays.length / 2  --> we do the half 
         let oldElement = arrays[i];        // iteraction because in one interaction we change two of the elements
         let previousIndex = arrays.length -1 -i; 
         arrays[i] = arrays[previousIndex];  
         arrays[previousIndex] = oldElement;
   
   }
   console.log(arrays.join(' '));
}
let input = ['a', 'b', 'c', 'd', 'e']
reverseInPlace(input)