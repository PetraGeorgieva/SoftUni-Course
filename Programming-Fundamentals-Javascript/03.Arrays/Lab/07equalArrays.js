function equalArrays(input, params) {
    let sum = 0
    let areequalArrays = true
    for (let i = 0; i < input.length; i++) {
        n = Number(input[i]);
        sum += n
        if (input[i] !== params[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areequalArrays = false;
            break;
        }
    }
    if (areequalArrays) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['1', '2', '4', '4', '5'], ['1', '2', '3', '4', '5'])