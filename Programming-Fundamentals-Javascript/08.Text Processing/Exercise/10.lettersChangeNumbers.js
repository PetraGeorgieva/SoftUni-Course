function lettersChangeNumbers(string) {
    let stringArr = string.split(' ');
    let final = 0;
    for (let line of stringArr) {
        if (line != ''){
            let boh = result(line)
            final+=boh
        }
   
    }
    console.log(final.toFixed(2))
    function result(text) {
        let firstLetter = text[0]
        let secondLetter = text[text.length-1]
        let number = Number(text.substring(1,text.lastIndexOf(secondLetter)))
        let position = 0
        let firstLetterResult = 0;
        let secondLetterResult = 0;
        let result  =0;
        if(firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <=90 ){
              if (65 - firstLetter.charCodeAt() === 0){
                position = 1
              } else if (90-  firstLetter.charCodeAt() === 0){
                position = 26
              } else {
              position = (Math.abs(65 -  firstLetter.charCodeAt()))+1
              }
              firstLetterResult = number/position

        } else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <=122 ){
            if (97 - firstLetter.charCodeAt() === 0){
                position = 1
              } else if (122-  firstLetter.charCodeAt() === 0){
                position = 26
              } else {
              position = (Math.abs(97 -  firstLetter.charCodeAt()))+1
              }

              firstLetterResult = number*position 
        }
        if(secondLetter.charCodeAt()>= 65 && secondLetter.charCodeAt() <=90 ){
            if (65 - secondLetter.charCodeAt() === 0){
              position = 1
            } else if (90-  secondLetter.charCodeAt() === 0){
              position = 26
            } else {
            position = (Math.abs(65 -  secondLetter.charCodeAt()))+1
            }
            secondLetterResult = firstLetterResult-position

      } else if (secondLetter.charCodeAt() >= 97 && secondLetter.charCodeAt() <=122 ){
          if (97 - secondLetter.charCodeAt() === 0){
              position = 1
            } else if (122-  secondLetter.charCodeAt() === 0){
              position = 26
            } else {
            position = (Math.abs(97 -  secondLetter.charCodeAt()))+1
            }

            secondLetterResult = firstLetterResult+position 
      }

      result = secondLetterResult
      return result;
    }
}
lettersChangeNumbers('P34562Z q2576f   H456z')