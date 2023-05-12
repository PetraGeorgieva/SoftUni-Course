function binaryTodicimals(n) {
    
    let result = 0
    let text = n.toString();
    let division = text.split("")
    let reversearray = division.reverse()
    if (n <1000){
        for (let i = 0; i < reversearray.length; i++) {
            let number = Number(reversearray[i])
             result += number
            
        }
          console.log(result)
    } else {
        for (let i1 = 0; i1 < reversearray.length; i1++) {
            let tot = Math.pow(2,i1) * Number(reversearray[i1])
            result+=tot
            
        }
        console.log(result)
    }
}
binaryTodicimals([11110000])