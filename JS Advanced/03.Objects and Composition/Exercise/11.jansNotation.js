function jansNotation(params) {
    let arr = []
    for (let instruction of params) {
        if (typeof (instruction) === 'number') {
            arr.push(instruction)
        } else {
            if (arr.length < 2) {
                console.log('Error: not enough operands!')
                return;
            } else {
                let currentSecondNumber = arr.pop()
                let currentFirstNumber = arr.pop()
                switch (instruction) {
                    case '+': arr.push(currentFirstNumber + currentSecondNumber);break;
                    case '-':    arr.push(currentFirstNumber - currentSecondNumber); break;
                    case '*':   arr.push(currentFirstNumber * currentSecondNumber); break;
                    case '/':   arr.push(currentFirstNumber / currentSecondNumber);break;
                }
            }
        }
    }
     if(arr.length >= 2){
        console.log("Error: too many operands!")
     }
      if(arr.length === 1){
        console.log(arr[0]);
      }
       
     
}
jansNotation([15,'/']
   
)