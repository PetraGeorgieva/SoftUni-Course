function equalNeighbors(params) {
    let count = 0;
    for (let i = 0; i < params.length; i++) {
        let arr = params[i]
        let nextArr = params[i+1]
        for (let x = 0; x < arr.length; x++) {
           
            if(i < params.length-1){
                let el = arr[x]
                let otherEl = nextArr[x]
                if(el == otherEl){
                    count++
                }
            }
            if(x < arr.length-1){
                let el = arr[x]
                let nextEl = arr[x+1]
                if(el == nextEl){
                    count++
                }
            }


        }
    }
   return count;
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '5', '5', '5', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
