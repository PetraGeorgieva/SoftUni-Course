function jansNotation(params) {
    let numberSaved = [];
    let result = 0;

    for (let i = 0; i < params.length; i++) {
        if (typeof (params[i]) === "number") {
            numberSaved.push(params[i])
        } else {
            if (params[i] === '+') {
                if (numberSaved.length >= 2) {
                    let lastnumber = numberSaved.pop();
                    let secondlastnumber = numberSaved.pop()
                    result = secondlastnumber + lastnumber 
                    numberSaved.push(result);
                    result = 0;
                } else {
                    console.log('Error: not enough operands!')
                    return;
                }
            } else if (params[i] === '-') {
                if (numberSaved.length >= 2) {
                    let lastnumber = numberSaved.pop();
                    let secondlastnumber = numberSaved.pop()
                    result = secondlastnumber - lastnumber;
                    numberSaved.push(result);
                    result = 0;
                } else {
                    console.log('Error: not enough operands!')
                    return;
                }
            } else if (params[i] === '*') {
                if (numberSaved.length >= 2) {
                    let lastnumber = numberSaved.pop();
                    let secondlastnumber = numberSaved.pop()
                    result =secondlastnumber *  lastnumber;
                    numberSaved.push(result);
                    result = 0;
                } else {
                    console.log('Error: not enough operands!')
                    return;
                }
            } else if (params[i] === '/') {
                if (numberSaved.length >= 2) {
                    let lastnumber = numberSaved.pop();
                    let secondlastnumber = numberSaved.pop()
                    result =  secondlastnumber / lastnumber;
                    numberSaved.push(result);
                    result = 0;
                } else {
                    console.log('Error: not enough operands!')
                    return;
                }
            }
        }
    }
    if (numberSaved.length >= 2) {
        console.log("Error: too many operands!")
    } else {
        console.log(numberSaved.join(' '))
    }
}
jansNotation([15,
    '/',
   ]   
)