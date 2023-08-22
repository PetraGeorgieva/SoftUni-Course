function sortingNumbers(params) {
    let sordetSmallest =  params.sort((a, b) => a - b);
    let sortedBigger = []
    for (let y = sordetSmallest.length-1; y >= 0; y--) {
        sortedBigger.push(sordetSmallest[y])
    }
    let result = [];
    let i = 0;
    let count = 0;
    while(count !== params.length){
       
        result.push(sordetSmallest[i]);
        count++
        if(count >= params.length){
            break;
        }
        result.push(sortedBigger[i]);
        count++
        i++
    }
   return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])