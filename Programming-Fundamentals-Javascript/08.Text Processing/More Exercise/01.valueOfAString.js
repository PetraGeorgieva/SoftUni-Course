function valueOfAstring(params) {
    let string = params[0]
    let twoInput = params[1]
    let result  = 0
    if(twoInput === 'UPPERCASE' ){
     for (let i = 0; i < string.length; i++) {
         if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <=90){
              result+=string[i].charCodeAt()
         }
     }
    }else if (twoInput === 'LOWERCASE' ){
        for (let i = 0; i < string.length; i++) {
            if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <=122){
                 result+=string[i].charCodeAt()
            }
        }
    }
console.log(`The total sum is: ${result}`)
}
valueOfAstring(['AC/DC',
'UPPERCASE']

)