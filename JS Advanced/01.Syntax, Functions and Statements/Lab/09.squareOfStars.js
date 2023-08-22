function squareOfStars(n) {
    let star = '* '
    for (let i = 0; i < n; i++) {
        let result = star.repeat(n)
        console.log(result)
        
    }
}
squareOfStars(1)