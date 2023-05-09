function negativeOrPositiveNumbers(array) {
let newArray = [];
for (let i = 0; i < array.length; i++) {
    let num =  Number(array[i]);
    if (num < 0){
     newArray.unshift(num)
    } else {
       newArray.push(num)
    }
}
     return newArray.join('\n');
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));
console.log(negativeOrPositiveNumbers(['3', '-2', '0', '-1']));
