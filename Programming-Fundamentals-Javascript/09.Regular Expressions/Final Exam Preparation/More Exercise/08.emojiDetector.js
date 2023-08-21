function emojiDetector(params) {
    let pattern = /(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)/g
    let digitPatern = /\d/g
    let text = params.shift()
    let patchDigit = [...text.matchAll(digitPatern)];
    let result = 1
    patchDigit.forEach(number => {
        result*=number
    });
    console.log(`Cool threshold: ${result}`);
    let textMatch = [...text.matchAll(pattern)];
    console.log(`${textMatch.length} emojis found in the text. The cool ones are:`);
    textMatch.forEach(element => {
        let secondResult = 0;
        for (let i = 0; i < element[2].length; i++) {
            let digit = element[2][i].charCodeAt()
            secondResult+=digit
        }
        if(secondResult > result){
            console.log(element[0])
        }
    });
    
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])