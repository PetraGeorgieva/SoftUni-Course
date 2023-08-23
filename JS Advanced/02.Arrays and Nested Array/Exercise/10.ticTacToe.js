function ticTacToe(params) {
    let firsPlayer = 'X';
    let secondPlayer = 'O';
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]
   for (let i = 0; i < params.length; i++) {
    let [x,y] = params[i].split(' ').map(n=>Number(n));
    if (i%2 ===0){
        if(dashboard[x][y] === false){
            dashboard[x][y] = firsPlayer
            if (checkForWinner(dashboard, firsPlayer) === true) {
                console.log(`Player ${firsPlayer} wins!`)
                dashboard.forEach(element => {
                    console.log(element.join('\t'));
                });
                return;
            }
            if(checkIfDashboardIsFull(dashboard) === true ){
                console.log("The game ended! Nobody wins :(")
                dashboard.forEach(element => {
                    console.log(element.join('\t'));
                });
                return;
            }
        } 
        else if(dashboard[x][y] === firsPlayer|| dashboard[x][y] === secondPlayer){
            console.log("This place is already taken. Please choose another!")
            let sign = firsPlayer;
            firsPlayer = secondPlayer;
            secondPlayer = sign
        }
    }else{
        if(dashboard[x][y] === false){
            dashboard[x][y] = secondPlayer
            if (checkForWinner(dashboard, secondPlayer) === true) {
                console.log(`Player ${secondPlayer} wins!`)
                dashboard.forEach(element => {
                    console.log(element.join('\t'));
                });
                return;
            }
            if(checkIfDashboardIsFull(dashboard) === true ){
                console.log("The game ended! Nobody wins :(")
                dashboard.forEach(element => {
                    console.log(element.join('\t'));
                });
                return;
            }
        }
        else if(dashboard[x][y] === firsPlayer|| dashboard[x][y] === secondPlayer){
            console.log("This place is already taken. Please choose another!")
            let sign = firsPlayer;
            firsPlayer = secondPlayer;
            secondPlayer = sign
        }

    }

    
   }
   function checkForWinner(currentBoard, sign) {
    let isWinner = false;
    for (let i = 0; i < 3; i++) {
        if (currentBoard[i][0] === sign && currentBoard[i][1] === sign && currentBoard[i][2] === sign) {
            isWinner = true;
            break;
        }
        if (currentBoard[0][i] === sign && currentBoard[1][i] === sign && currentBoard[2][i] === sign) {
            isWinner = true;
            break;
        }
    }
    if (!isWinner) {
        if ((currentBoard[0][0] === sign && currentBoard[1][1] === sign && currentBoard[2][2] === sign) ||
            (currentBoard[2][0] === sign && currentBoard[1][1] === sign && currentBoard[0][2] === sign)) {
            isWinner = true;
        }
    }
    return isWinner;
}
       function checkIfDashboardIsFull(board) {
        let counter = 0;
        let isTrue = false
          for (let z = 0; z < board.length; z++) {
            let row = board[z]
            for (let index = 0; index < row.length; index++) {
                let rowEl = row[index]
               if(rowEl == 'X' || rowEl == 'O'){
                counter++
               }
            }
          }
          if(counter === 9){
            isTrue = true
          }
          return isTrue
       }
}
ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)