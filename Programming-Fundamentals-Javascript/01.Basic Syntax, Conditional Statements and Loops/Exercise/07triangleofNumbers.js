function tringleOfNumbers(stars) {
    let result = ""
    for (let i = 1; i <= stars; i++) {
        for (let i1 = 1; i1 <= i; i1++){
              result += `${i} `
              
        }
        console.log(`${result} `)
        result = ""
    }
}
tringleOfNumbers(3)