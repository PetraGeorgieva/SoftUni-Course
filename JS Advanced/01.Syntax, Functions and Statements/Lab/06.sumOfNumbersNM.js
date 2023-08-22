function sumOfNumbersNM(ar,ar2) {
    let initalN = Number(ar);
    let finalN = Number(ar2);
    let result = 0;
    for (let i = initalN ; i <= finalN; i++) {
        result+=i
        
    }
    console.log(result)
}
sumOfNumbersNM('1', '5' )