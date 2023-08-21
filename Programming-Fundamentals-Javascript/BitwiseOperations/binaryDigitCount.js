function binary(digit,n) {
    let counter = 0
    while(digit > 0){
        let remainder = digit % 2;
        if(remainder === n){
            counter++
        }
        digit = Math.trunc(digit/2)
    }
    console.log(counter)
}
binary(20,0);