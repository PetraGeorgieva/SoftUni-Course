function extract(params) {
    let arr = []
    let cuurentBigger = params[0]
    arr.push(params[0])
   for (let i = 1; i < params.length; i++) {
         if(params[i] > cuurentBigger){
            arr.push(params[i]);
            cuurentBigger = params[i]
         }
   }
  return arr
}
extract([20, 
    2, 
    15,
    4]
    );