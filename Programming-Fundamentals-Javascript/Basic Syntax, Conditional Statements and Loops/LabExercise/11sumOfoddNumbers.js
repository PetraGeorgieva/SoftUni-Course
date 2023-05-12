function sumofoddNumbers(n) {
    let odds = 1;
    let results = 0
    for (let i = 1 ; i <= n; i++){
         console.log(odds)
         results+=odds
         odds+=2
    }
     console.log(`Sum: ${results}`)

}
sumofoddNumbers(3)