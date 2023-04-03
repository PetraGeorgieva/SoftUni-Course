function equalArrays(input,params) {
    let sum = 0
for (let i = 0 ; i < input.lenght;i++){
    input[i] = Number(input[i]);
    
}
for (let i = 0 ; i < params.lenght;i++){
    input[i] = Number(input[i]);
}
let areequalArrays = true
for (let i = 0; i < input.length; i++) {
    n = Number(input[i]);
      sum+=n
   if(input[i] !== params[i]){
    console.log(`Arrays are not identical. Found difference at ${i} index`);
    areequalArrays = false;
    break;
   } 
      
}  
    if (areequalArrays) { 
    console.log(`Arrays are identical. Sum: ${sum}`)
}
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])