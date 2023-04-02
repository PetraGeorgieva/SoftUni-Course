function pythagoreantheorem(x1, y1, x2,  y2) { 
    let p1 = Math.pow(x2 - x1, 2)
    let p2 = Math.pow(y2 - y1, 2)
    let sum = p1 + p2
    let distance = Math.sqrt(sum)
    console.log(distance)
 } 
distance(2,4,5,0)