function multidimensionalArrays(params) {
    let isTrue = true;
    let sum = params[0].reduce((accumulator, currentElement) => accumulator += currentElement, 0);
    let rowSum = 0;
    let columsSum = 0;
    for (let i = 0; i < params.length; i++) {
        let row = params[i]
        for (let index = 0; index < row.length; index++) {
            let rowEl = params[i][index]
            rowSum += rowEl;
        }
        for (let y = 0; y < params.length; y++) {
            let colums = params[y][i]
            columsSum += colums
        }
        if (sum !== rowSum || sum !== columsSum) {
            isTrue = false
            break;
        }

        rowSum = 0;
        columsSum = 0;


    }
    console.log(isTrue)
}
multidimensionalArrays([[1, 0, 0],
[0, 1, 0]])