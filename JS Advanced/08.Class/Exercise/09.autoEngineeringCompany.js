function auto (input){
let map = new Map()

  input.forEach(element => {
   let [carBrand,carModel,producedCar] =  element.split(' | ');
   producedCar = Number(producedCar);
if(map.has(carBrand)){
   let currentObject =map.get(carBrand);
   if(currentObject.hasOwnProperty(carModel)){
    let currentQuantity = currentObject[carModel]
    currentObject[carModel] = currentObject[carModel]+currentQuantity
   }else{
    currentObject[carModel]=producedCar
   }
}else{
   map.set(carBrand,{[carModel]:producedCar})
}
  });
  let mapArray = map.entries()
  for (let [key,value] of mapArray) {
    console.log(key)
    let arr = Object.entries(value)
    for (let [type,quantity] of arr) {
        console.log(`###${type} -> ${quantity}`)
    }
  }
}
auto(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)