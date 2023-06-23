function garages(params) {
let newMap = new Map()
for (let i = 0; i < params.length; i++) {
    let [garage,info] = params[i].split(' - ')
    if(!newMap.has(garage)){
            newMap.set(garage,[info]);
    }else{
    let availableCars = newMap.get(garage);
        availableCars.push(info);
        newMap.set(garage,availableCars)
    }    
}
let newMapArr = [...newMap.entries()].sort((a,b)=> a[0]-b[0]);
let result  =''
for (let[currentGarage,currKeyValue] of newMapArr) {
 result+= `Garage № ${currentGarage}\n`;
 for (let currentCarInfo of currKeyValue) {
    currentCarInfo = currentCarInfo.replace(/: /g, ' - ');
    result += `--- ${currentCarInfo}\n`;
 }
}
console.log(result)
}
garages(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);   