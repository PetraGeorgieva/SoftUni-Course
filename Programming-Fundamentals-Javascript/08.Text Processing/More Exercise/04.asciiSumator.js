function asciiSumator(params) {
    let firstChar = params[0].charCodeAt()
    let secondChar = params[1].charCodeAt()
    let mathMin = Math.min(firstChar,secondChar)
    let mathMax = Math.max(firstChar,secondChar)
    let string = params[2];
    let result = 0;
    for (let i = 0; i < string.length; i++) {
       let element = string[i].charCodeAt()
       if (element > mathMin && element < mathMax){
        result+=element
       }
        
    }
    console.log(result)
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']


)