function cone (r,h) {
   let volume = ( Math.PI*Math.pow(r,2)*h)/3
   let a = Math.sqrt(r*r+ h*h)

   let area = Math.PI*r*(r+a)
   console.log(`volume = ${volume.toFixed(4)}`);
   console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5)