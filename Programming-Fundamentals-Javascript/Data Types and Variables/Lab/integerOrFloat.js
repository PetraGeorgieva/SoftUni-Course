function integerOrFloat (num1,num2,num3) {
     let result = num1 + num2 + num3
    // let output = result % 1 === 0
    // ? result + ` - Integer`
    // : result + ` - Float`
    // console.log(`${output}`)

    // let type = `Float`
    if (Number.isInteger(result)){
        console.log(`${result} - Integer`)
        // type = `Integer`
    } else{
        console.log(`${result} - Float`)
    }
      // console.log(`${result} - ${type}`)
}

integerOrFloat(112.3, 212.3, 5)