function diagonalSum(params) {
    let firstDigonal = 0;
    let secondDigonal = 0;
    let arr = []
    for (let i = 0; i < params.length; i++) {
        firstDigonal+=params[i][i]
    }
    arr.push(firstDigonal)
    let finalNumber = params.length
    for (let i = 0; i < params.length; i++) {
         finalNumber-=1
        secondDigonal+=params[i][finalNumber]
    }
    arr.push(secondDigonal);
    console.log(arr.join(' '))

}
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );