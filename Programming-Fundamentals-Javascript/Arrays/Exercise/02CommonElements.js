function commonElements(array, params) {
   for (let i = 0; i < array.length; i++) {
      for (let i1 = 0; i1 < params.length; i1++) {
         if (array[i] === params[i1]) {
            console.log(array[i]);
         }
      }
   }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
   ['s', 'o', 'c', 'i', 'a', 'l']
)