function subSum(array, starIndex, endIndex) {
  let sum = 0;
  if (!Array.isArray(array)) return NaN;

  if (starIndex < 0) {
    starIndex = 0;
  }
  if (endIndex < 0 || endIndex > array.length-1) {
    endIndex = array.length-1 ;
  }

  for (let i = starIndex; i <= endIndex; i++) {
    sum += Number(array[i]);
  }
    console.log(sum);
}
subSum([10, 22, 30, 40], 0, 2)
