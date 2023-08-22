function proccedOddPosition(params) {
    let result = []
    for (let i = 0; i < params.length; i++) {
      if (!(i%2===0)){
         let doubled = params[i]*2
         result.push(doubled)
      }
    }
    result = result.reverse();
    console.log(result.join(' '));
}
proccedOddPosition([10, 15, 20, 25])