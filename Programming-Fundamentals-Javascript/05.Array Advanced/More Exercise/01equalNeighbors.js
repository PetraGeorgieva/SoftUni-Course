function equalNeighbors(arr) {
    let counter = 0;
    for (let indexPositionOfArr = 0; indexPositionOfArr < arr.length; indexPositionOfArr++) {
        let row = arr[indexPositionOfArr];
        for (let j = 0; j < row.length; j++) {
            let neighbors = row[j];
            let nextNeighbor = row[j + 1];

            if (indexPositionOfArr !== arr.length - 1) {
                if (neighbors === nextNeighbor) {
                    counter++;
                }
                if (neighbors === arr[indexPositionOfArr + 1][j]) { // nextRowNeighbor 
                    counter++;
                }
            }
            else if (neighbors === nextNeighbor) {   
                counter++;
            }
        }
    }
    console.log(counter);
}




// equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']])

equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)