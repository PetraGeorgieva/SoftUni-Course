function guineaPig(array){
  array = array.map(x => Number(x))
  let foodKg = array.shift();
   foodKg*=1000
  let hayKg = array.shift();
  hayKg*=1000
  let coverKg = array.shift();
  coverKg*=1000
  let weightKg = array.shift();
  weightKg*=1000
  for (let i = 1; i <= 30; i++) {
      foodKg-=300
     if(i % 2 === 0){
      hayKg -= foodKg*0.05;
     } 
     if (i % 3 === 0) {
      coverKg-=weightKg/3;
     }
    if(foodKg <= 0 || hayKg <= 0 || coverKg <= 0 ){
    console.log("Merry must go to the pet store!");
    return;
   } 
}
  console.log(`Everything is fine! Puppy is happy! Food: ${(foodKg/1000).toFixed(2)}, Hay: ${(hayKg/1000).toFixed(2)}, Cover: ${(coverKg/1000).toFixed(2)}.`)
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])