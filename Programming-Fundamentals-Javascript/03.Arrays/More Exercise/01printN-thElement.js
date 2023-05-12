function print(params) {
    let steps = Number(params[params.length -1]);
    let result = ""
    for (let i = 0; i < params.length - 1; i+=steps) {
        let num = (params[i])
        result += `${num} `
        
    }
    console.log(result)
}
print(['dsa', 'asd', 'test', 'test', '2'])