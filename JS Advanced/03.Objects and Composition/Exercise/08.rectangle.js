function rectangle (width,height,color){
    let letterToUpperCase = color[0].toUpperCase()
    color = color.substring(1,)
    color = letterToUpperCase + color
       let obj = {
         width,
         height,
         color,
         calcArea : ()=>{
            let result = 0;
            result = width*height
            return result
         }
       }
       return obj
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
