function modernTimesofHashTag(text) {
    let input = text.split(' ');
    let array = []
    for (let line of input) {
        let length = line.length 
        if( length > 1 && line.startsWith("#")){
            line = line.substring(1)
            let isSpecial = true
            for(let ch of line){
                 ch = ch.toLowerCase()
                if(ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122 ){
                    isSpecial = false;
                    break;
                }
            }
            if(isSpecial === true){
            array.push(line)
            }
        }
       
    }
      console.log(array.join('\n'))
}

modernTimesofHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')