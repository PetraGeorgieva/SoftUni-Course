function biggestElement(params) {
    let res = []
  for (let arr of params) {
    let result =  Math.max(...arr)
    res.push(result)
  }
   let finalResult = Math.max(...res)
   return finalResult;
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )