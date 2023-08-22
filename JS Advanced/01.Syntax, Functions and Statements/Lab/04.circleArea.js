function areaOfCircle(n) {
    let type = typeof n
if(type === 'number'){
   let result = n*n*Math.PI
   console.log(result.toFixed(2))

}else{
    console.log(`We can not calculate the circle area, because we receive a ${type}.`)
}
}
areaOfCircle(5)