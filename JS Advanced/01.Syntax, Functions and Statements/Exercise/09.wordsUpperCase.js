function wordsUpperCase(string) {
    let regex =/\w+/g
    let words = string.match(regex);
    let newArr = []
    words.forEach(element => {
       let result = element.toUpperCase()
       newArr.push(result)
    });

    console.log(newArr.join(', '))
}
wordsUpperCase('Hi, how are you?')