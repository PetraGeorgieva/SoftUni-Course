function signCheck (numOne,numTwo,numThree){
let sign = 'Positive'
let isnum1Negative= numOne < 0;
sign = Checkpositiveornegative(sign,isnum1Negative);
let isnum2Negative= numTwo < 0;
sign = Checkpositiveornegative(sign,isnum2Negative);
let isnum3Negative= numThree < 0;
sign = Checkpositiveornegative(sign,isnum3Negative);
return sign;
function Checkpositiveornegative (sign, shouldChange){
    if (shouldChange === false){  
       return sign
    }
    if (sign === 'Positive'){
        sign = 'Negative';
    } else {
        sign = 'Positive';
    }
    return sign;
}

}
console.log(signCheck(5,12,-15));