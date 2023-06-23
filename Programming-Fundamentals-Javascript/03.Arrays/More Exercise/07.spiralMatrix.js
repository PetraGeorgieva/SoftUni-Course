function spiralMatrix(num1,num2) {
    printMatrix(getMatrix(num1,num2));

    function getMatrix(num1,num2) {
        let [rows, cols] = [num1,num2]
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count; // columms is same and change the position of index 
            minRow++;// we complete the first one rows so we must go down
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count; //  columms is change and the position is at the end 
            maxCol--; // we change the position be cause we need to start from that position --> 0
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--; // we change  so we can start up the rows that we coplete
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++; // we go from the botom at [minRow]
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

spiralMatrix(5,5);

spiralMatrix(3,3);