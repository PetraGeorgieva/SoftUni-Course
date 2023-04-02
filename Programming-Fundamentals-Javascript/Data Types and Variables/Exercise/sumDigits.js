function sumDigits(num) {
    let numIntoString = String(num);
    let sum = 0
    for (let i = 0; i < numIntoString.length; i++) {
        let numbers = (numIntoString[i])
        numbers = Number(numbers)
        sum += numbers


    }
    console.log(sum)
}
sumDigits(97561)