function revealWords(word,textOccurences) {
    let wordsReplace = word.split(', ');
    let words = textOccurences.split(' ');
    for (let wordReplace of wordsReplace){
        let wordlength = wordReplace.length
        let stars = '*'.repeat(wordlength)
        let result = ''
        for (let line of words) {
           if(stars === line){
               line = wordReplace
               result+=`${line} `
           } else{
               result+=`${line} `
           }
        }
         textOccurences = result;
         words = textOccurences.split(' ');
         result = ''
   }
   console.log(textOccurences)
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)