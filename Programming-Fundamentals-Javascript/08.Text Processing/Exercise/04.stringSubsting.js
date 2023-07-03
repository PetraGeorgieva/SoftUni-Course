function stringSubstring(word,text) {
word = word.toLowerCase()
   let textArr = text.split(' ')
   let isTrue = true
   for (let line of textArr) {
    if(line.toLowerCase() === word.toLowerCase()){
        console.log(word)
        isTrue = false
        return;
    }
   }
   if(isTrue){
    console.log(`${word} not found!`)
   }
    


}
stringSubstring('pyton',
'JavaScript is the best programming language')
