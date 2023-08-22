function smallest(params) {
    let sorted = params.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(params[i]) 
    }
    console.log(arr.join(' '))
}
smallest([30, 15, 50, 5])