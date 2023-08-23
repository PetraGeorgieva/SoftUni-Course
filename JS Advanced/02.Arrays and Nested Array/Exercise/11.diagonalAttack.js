function diagonalAttack(params) {
    let arr = []
    let sum = 0;
    let secondSum = 0;
    let arrDiagonal = [];
    let arrSecondDiagonal = [];
    for (let i = 0; i < params.length; i++) {
       let array = params[i].split(' ')
       arr.push(array)
    }

 for (let y = 0; y < arr.length; y++) {
   let row = Number(arr[y][y])
    sum+=row
    arrDiagonal.push(row)
 }
 let boh = 0;
 for (let x = arr.length-1; x >= 0; x--) {
    let row2 = Number(arr[boh][x])
     secondSum+=row2
     arrSecondDiagonal.push(row2)
   boh++
  }
 if(sum === secondSum){
    for (let z = 0; z < arr.length; z++) {
        let changeRow = arr[z];
        for (let m = 0; m  < changeRow.length; m++) {
            changeRow[m] = sum
        }
    } 
         let m = 0;
    for (let y = 0; y < arr.length; y++) {
            arr[y][y] = arrDiagonal[m]
            m++
      }
         let v = 0
         let bah = 0;
    for (let x = arr.length-1; x >= 0; x--) {
        arr[bah][x] = arrSecondDiagonal[v]
        v++
        bah++
      }
    arr.forEach(element => {
        console.log(element.join(' '));
    });
 } else{
    arr.forEach(element => {
        console.log(element.join(' '));
    });
 }

}
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']

)