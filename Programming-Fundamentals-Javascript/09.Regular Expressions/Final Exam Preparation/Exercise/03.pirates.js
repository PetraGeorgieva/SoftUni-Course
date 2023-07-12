function pirates(params) {
    let i = 0;
    let object ={}
   while(params[i] != 'Sail'){
    let [cietes,population,gold] = params[i].split('||')
    if(!object.hasOwnProperty(cietes)){
        object[cietes] = {}
        object[cietes]['population'] = Number(population)
        object[cietes]['gold'] = Number(gold)
    }else{
        let currentpopulation = object[cietes]['population']
       let currentGold = object[cietes]['gold']
       object[cietes]['population'] = currentpopulation+= Number(population)
       object[cietes]['gold'] = currentGold+=Number(gold)
    }

    i++
   }
   i++
   while (params[i] !== 'End'){
    let commands = params[i].split('=>')
    switch (commands[0]) {
        case 'Plunder': plunger(object,commands[1],Number(commands[2]),Number(commands[3]),)
            break;
    
        case 'Prosper': prosper(object,commands[1],Number(commands[2]))
            break;
    }
    i++
   }
   function plunger(object,town,people,golds) {
    let peopleremainAfterKill = object[town]['population'] -= people;
    let goldremain = object[town]['gold'] -= golds;
    console.log(`${town} plundered! ${golds} gold stolen, ${people} citizens killed.`);
    if(peopleremainAfterKill == 0 || goldremain == 0 || peopleremainAfterKill == 0 && goldremain == 0 ){
       console.log(`${town} has been wiped off the map!`)
       delete object[town];
    }else{
        object[town]['population'] = peopleremainAfterKill;
        object[town]['gold'] = goldremain;
    }
   }
   function prosper(object,town,golds) {
      if(golds > 0){
        let currentGold = object[town]['gold']
        let newGold =  currentGold+=golds
        object[town]['gold'] = newGold
        console.log(`${golds} gold added to the city treasury. ${town} now has ${object[town]['gold']} gold.`)
      } else{
        console.log("Gold added cannot be a negative number!" )
      }
   }
   let objectArr = Object.entries(object)
   if(objectArr.length > 0){
    console.log(`Ahoy, Captain! There are ${objectArr.length} wealthy settlements to go to:`)
    for (let [city,obj] of objectArr) {
            console.log(`${city} -> Population: ${obj['population']} citizens, Gold: ${obj['gold']} kg`)
        
    }
   }else{
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
   }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
