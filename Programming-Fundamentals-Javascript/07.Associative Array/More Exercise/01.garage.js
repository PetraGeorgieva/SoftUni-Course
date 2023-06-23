function garages(params) {
let newMap = new Map()
for (let i = 0; i < params.length; i++) {
    let garage = params[i].split(' - ')
    let info = garage[1].split(', ')
    if(newMap.has(garage[0])){
        for(let line of info){
            let infos = line.split(': ')
            newMap.get(garage[0]).set(infos[0],infos[1]);
        }
    }else{
        newMap.set(garage[0], new Map());
        for(let line of info){
            let infos = line.split(': ')
            newMap.get(garage[0]).set(infos[0],infos[1]);
        }
    }    
}
let newMapArr = [...newMap.entries()];
for (let riga of newMapArr) {
 console.log(riga[1])
}
}
garages(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);   