function passwordGenerator(params) {
    let fisrtsString = params[0]
    let secondString = params[1]
    let word = params[2].toUpperCase();
    let index = 0;
    let firstResult = passwords(fisrtsString, word, index)
    let secondResult = passwords(secondString, word, index)
    let concatenate = firstResult + secondResult
    let finalPassword = reverse(concatenate);
    console.log(`Your generated password is ${finalPassword}`)

    function passwords(string, text) {
        let result = ''
        for (let i = 0; i < string.length; i++) {
            if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
                if (index <= text.length - 1) {
                    result += text[index]
                    index++
                } else {
                    index = 0;
                    result += text[index]
                    index++
                }

            } else {
                result += string[i]
            }
        }
        return result;
    }
    function reverse(result) {
        let lastIndex = result.length - 1
        let password = ''
        while (lastIndex != 0) {
            password += result[lastIndex]
            lastIndex--
        }
        password += result[0]
        return password;
    }
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)