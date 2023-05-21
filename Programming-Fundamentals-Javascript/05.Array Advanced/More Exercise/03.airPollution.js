function airPollution(input, commands) {
    let matrix = input.map(row => row
        .split(' ')
        .map(y => Number(y)));
    let result = '';
    let newArr = []
    for (let i = 0; i < commands.length; i++) {
        let [command, index] = commands[i].split(' ');
        index = Number(index)
        if (command === "breeze") {
            for (let i = 0; i < matrix[index].length; i++) {

                if (matrix[index][i] < 50) {
                    matrix[index][i] -= 15
                    if (matrix[index][i] <= 0) {
                        matrix[index][i] = 0
                    }
                } else {
                    matrix[index][i] -= 15
                }

            }
        } else if (command === "gale") {
            for (let i = 0; i < matrix.length; i++) {
                if (matrix[i][index] < 50) {
                    matrix[i][index] -= 20
                    if (matrix[i][index] <= 0) {
                        matrix[i][index] = 0
                    }
                } else {
                    matrix[i][index] -= 20
                }

            }
        } else if (command === 'smog') {
           
            for (let i = 0; i < matrix.length; i++) {
                matrix[i] = matrix[i].map(z => (z + index))

            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let pollutedblock = matrix[row][col];
            if (pollutedblock >= 50) {
                result += `${row}-${col}`
                newArr.push(result)
                result = '';
            }

        }
    }
    if (newArr.length > 0) {
        console.log(`Polluted areas: [${newArr.join('], [')}]`)
    } else {
        console.log(`No polluted areas`)
    }
}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)