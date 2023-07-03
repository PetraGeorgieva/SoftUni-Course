function countStringOccurrences(text,searchword) {
    let counter = 0;
    let words = text.split(' ');
    for(let word of words){
        if(word === searchword){
            counter++
        }
    }
    console.log(counter)
}
countStringOccurrences('This is a word and it also is a sentence',
'is'
)