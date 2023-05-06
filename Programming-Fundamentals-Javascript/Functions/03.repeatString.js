function repeatString(str,repeatNum) {
    let result = ''
    for (let i = 0; i < repeatNum; i++) {
        result += str 
    }
    return result;
}
console.log(repeatString("abc",3));