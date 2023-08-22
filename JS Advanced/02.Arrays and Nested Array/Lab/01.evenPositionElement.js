function evenPositionElement(params) {
    let array = []
    for (let i = 0; i < params.length; i++) {
        if(i%2 == 0){
           let el = params[i]
           array.push(el)
        }
    }
    console.log(array.join(' '))
}
evenPositionElement(['20', '30', '40', '50', '60'])