function triplesOfLatinLetters(n) {
    let firstletter = ""
    let secondletter = ""
    let thirthletter = ""
    let sum = ""
    for (let i = 0; i < n; i++) {
        firstletter = String.fromCharCode(97 + i)
        for (let i1 = 0; i1 < n; i1++) {
            secondletter = String.fromCharCode(97 + i1)
            for (let i2 = 0; i2 < n; i2++) {
                thirthletter = String.fromCharCode(97 + i2)
                sum += firstletter
                sum += secondletter
                sum += thirthletter
                console.log(sum)
                sum = ""
            }
        }
    }
}
triplesOfLatinLetters(3);