function mirrorWords(input){
let text = input.shift()
let hiddenWordsPattern = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g;
let hiddenWords = [...text.matchAll(hiddenWordsPattern)];
let counter = 0;
let result = []
for (let match of hiddenWords) {
    counter++
    let leftWord = match.groups.word1;
    let rightWord = match.groups.word2;
    let reversedRight = reverseStr(rightWord);
    if(leftWord === reversedRight){
     result.push(`${leftWord} <=> ${rightWord}`);
    }
    
}
function reverseStr(text){
    let reversed = ''
    for (let index = text.length-1; index >= 0; index--) {
       reversed+=text[index]      
    }
    return reversed;
}
if(counter > 0){
    console.log(`${counter} word pairs found!`)   
}else{
    console.log('No word pairs found!')
}
if(result.length > 0){
    console.log('The mirror words are:')
    console.log(result.join(', '))
} else{
    console.log('No mirror words!')
}
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )