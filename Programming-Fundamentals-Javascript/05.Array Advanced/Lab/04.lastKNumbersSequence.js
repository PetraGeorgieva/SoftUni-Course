
function lastKNumbersSequence(n, k) {
   let result = [1];
   for (let current = 1; current < n; current++) {
      let start = Math.max(0, current - k); // we start with 0 if there is no number at the previus index
      let end = current - 1;                // thank to the end we can count the (in this case 3) position
      let sum = 0;                       // where we shoud stop sum the next number 
      for (let i = start; i <= end; i++) {
         sum += result[i]

      }
      result[current] = sum
   }
   console.log(result.join(' '));
}
lastKNumbersSequence(6, 3);



