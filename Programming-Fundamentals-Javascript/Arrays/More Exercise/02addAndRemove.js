function addAndRemove(params) {

    let newarray = [];
    for (let i = 0; i < params.length; i++) {
        let command = params[i]
      if (command === "add") {
        let newelement = 1 + i;
        newarray.push(newelement)
      } else if (command === "remove") {
        newarray.pop()

      }
    } if (newarray[0]=== undefined ){
         console.log('Empty')
    } else {
    console.log(newarray.join(' '))
    }
}
addAndRemove([])
