function cutAndReverse(string) {
    let halfLenght =(Math.trunc(string.length /2))-1
    let result = ''
    while(halfLenght !==0){
        result+=string[halfLenght]
        halfLenght--
    }
    result+=string[0]
console.log(result)
result = ''
halfLenght = (Math.trunc(string.length /2))-1
let stringLength =string.length-1
while(stringLength !== halfLenght){
    result+=string[stringLength]
    stringLength--
}
console.log(result)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')