function solution() {
    let librery = {
       protein:0,
       carbohydrate:0,
       fat:0,
       flavour:0
    }
    let dataLibrery = {
        apple : {carbohydrate:1,flavour:2},
        lemonade : {carbohydrate:10,flavour:20},
        burger : {carbohydrate:5,fat:7,flavour:3},
        eggs : {protein:5,fat:1,flavour:1},
        turkey : {protein:10,carbohydrate:10,fat:10,flavour:10}
    }
    return function manager(commands) {
        let [command,el,quantity] = commands.split(' ');
        switch (command) {
            case  "restock": return restock(el,quantity);
            case "prepare": return cook(el,quantity);
            case "report": return report()
        }
       
    };
    function restock(microEl,quantity) {
        librery[microEl] = librery[microEl] + Number(quantity);
        return "Success"
    }
    function cook(recipe,quantity) {
    let prepare = {};
      let arr = Object.entries(dataLibrery[recipe]);
      for (let [el,value] of arr) {
        let needQuantity = value*quantity;
        if(librery[el] < needQuantity){
            return `Error: not enough ${el} in stock`;
        }
        prepare[el] = needQuantity
      }
      for (let [element,value] of Object.entries(prepare)) {
          librery[element] =  librery[element] - value

      }
      return "Success";
    }
    function report(){
  return `protein=${librery.protein} carbohydrate=${librery.carbohydrate} fat=${librery.fat} flavour=${librery.flavour}`
    }
}
let manager = solution (); 
console.log (manager('restock carbohydrate 10', 'Success')); // Success 
console.log (manager ('restock flavour 10', 'Success')); // Error: not enough carbohydrate in stock  
console.log (manager ('prepare apple 1', 'Success')); // Error: not enough carbohydrate in stock  
console.log (manager ('restock fat 10', 'Success')); // Error: not enough carbohydrate in stock  
console.log (manager ('prepare burger 1', 'Success')); // Error: not enough carbohydrate in stock  
console.log (manager ('report', 'protein=0 carbohydrate=4 fat=3 flavour=5')); // Error: not enough carbohydrate in stock  


