function carModels(obj) {
  let command = obj.power
if (command <= 90){
  obj.engine = { power: 90, volume: 1800 };
}else if(command > 90 && command <= 120){
    obj.engine = { power: 120, volume: 2400 };
}else if(command > 120){
    obj.engine =  { power: 200, volume: 3500 }
}
delete obj.power
let carriageCommand = obj.carriage;
if(carriageCommand === 'hatchback' ){
    obj.carriage = { type: 'hatchback', color: obj.color }
}else if (carriageCommand === 'coupe'){
    obj.carriage = { type: 'coupe', color: obj.color }
}
delete obj.color
if(obj.wheelsize % 2 === 0){
    let wheel =  obj.wheelsize -1
    obj.wheels = [wheel,wheel,wheel,wheel]
}else{
    let wheel =  obj.wheelsize 
    obj.wheels = [wheel,wheel,wheel,wheel]
}
delete  obj.wheelsize
return obj;
}
carModels({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)