function negativePositiveNumbers(params) {
    let sorted = [];
    for (let i = 0; i < params.length; i++) {
        let num = params[i]
        if (num < 0) {
            sorted.unshift(num)
        }else{
            sorted.push(num)
        }
    }
    console.log(sorted.join('\n'))
}
negativePositiveNumbers([7, -2, 8, 9])