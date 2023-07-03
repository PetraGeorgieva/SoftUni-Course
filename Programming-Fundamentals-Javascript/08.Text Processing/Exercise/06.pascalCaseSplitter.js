function pascalCaseSplitter(string) {
    let incipit =  string[0].charCodeAt()
    let result = string[0]
    let arr = []
    for (let i = 1; i < string.length; i++) {
     if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122 ){
         result+=string[i]
     } else{
       arr.push(result)
       result = string[i]
     }
    }
      arr.push(result)
      console.log(arr.join(', '))
 
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')