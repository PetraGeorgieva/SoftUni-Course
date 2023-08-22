function aggregateElements(params) {

 let result =  params.reduce((accumulator,currentElement) => accumulator += currentElement,0);
 console.log(result)
 let secondResult = 0
 for (let i = 0; i < params.length; i++) {
    let el = 1/params[i]
    secondResult+=el
    
 }
  console.log(secondResult);
 let thirdResult =  params.join('')
console.log(thirdResult)
    
}
aggregateElements([1, 2, 3])