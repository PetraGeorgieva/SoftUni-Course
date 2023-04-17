function magicMatrix(array) {
    let sum = array[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < array.length; i++) {
        let sumRow = array[i].reduce((a, b) => a + b, 0);
        let sumCol = array.map(row => row[i]).reduce((a, b) => a + b, 0);

        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}
magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )