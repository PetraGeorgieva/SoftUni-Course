function distinctArray(array) {
  let params = array.map(Number);
    for (let i = 0; i < params.length; i++) {
       for (let j = i+1  ; j < params.length; j++) {
           if(params[i] === Number(params[j])){
            params.splice(j,1)
            j-=1
           } else{
            continue;
           }
       }
       }  console.log(params.join(' '));    
    }

distinctArray([20, 8, 12, 13, 4, 4, 4, 5]);