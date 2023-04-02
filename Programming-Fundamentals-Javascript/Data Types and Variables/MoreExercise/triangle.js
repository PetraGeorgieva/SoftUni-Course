function areaoftreangle (a,b,c){
 let  s= (a+b+c)/2
  let areaofT = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  console.log(areaofT)
}
areaoftreangle(2,3.5,4)