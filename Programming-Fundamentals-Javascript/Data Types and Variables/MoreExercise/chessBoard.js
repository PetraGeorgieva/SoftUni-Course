function chessBoard(n) {
    let counter = 0;
    let couterblack = 0
    let counterwhite = 0
    console.log(`<div class="chessboard">`)
    for (let i = 0; i < n; i++) {
        console.log(`  <div>`)
        for (let i1 = 0; i1 < n; i1++) {
            
            counter++
            if (counter % 2 === 0) {
                console.log(`    <span class="white"></span>`)
            } else {
                console.log(`    <span class="black"></span>`)
            }

        }
        
        console.log(`  </div>`)
           if (n % 2 === 0){
             counter++
           }
    }
    console.log(`</div>`)
}
chessBoard(7)