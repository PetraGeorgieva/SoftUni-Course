function biggestHalf(params) {
    let sorted = params.sort((a, b) => b - a);
    let arr = [];
    for (let i = 0; i < Math.ceil(params.length/2); i++) {
      arr.push(sorted[i]) 
    }
    arr =  arr.sort((a, b) => a - b);
    return arr;
}
biggestHalf([4, 7, 2, 5])