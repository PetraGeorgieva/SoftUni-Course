function condenseArrayToNumbe(params) {
    let currArr = params 
    
    while(currArr.length > 1) {
        let condensedarray = [];    
  for (let i = 0; i < currArr.length - 1; i++) {
    let firselement = currArr[i]
    let secondlemenet = currArr[i+1] 
      condensedarray.push(firselement + secondlemenet)  // new element of the condensed array
  }
    currArr = condensedarray  // every time we condense the array, so we can arrive the one length array 
}
     console.log(currArr[0])
}
condenseArrayToNumbe([2,10,3])