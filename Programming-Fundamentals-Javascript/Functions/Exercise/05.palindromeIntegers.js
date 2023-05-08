function polindromeIntegers(array){
for (let i = 0; i < array.length; i++) {
    let numIntoString = String(array[i]);
    let result = "";
    for (let j = numIntoString.length-1; j >= 0; j--) {
        result+= numIntoString[j];
        
    }
      console.log(numIntoString === result);
    
}

}
polindromeIntegers([123,323,421,121]);
console.log('--------');

polindromeIntegers([32,2,232,1010]);