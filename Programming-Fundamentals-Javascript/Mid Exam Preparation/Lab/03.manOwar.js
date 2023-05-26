function manOwar(arr) {
    let statusOfPIrateShip = arr.shift().split('>').map(x=> Number(x));
    let statusOfWarShip = arr.shift().split('>').map(x=> Number(x));
    let maxHealthCapacity = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let values = tokens.slice(1).map(x=>Number(x));
        
      switch (command) {
        case 'Fire': fire(statusOfWarShip,values[0],values[1]); break;
        case 'Defend':defend(statusOfPIrateShip,values[0],values[1],values[2]); break;
        case 'Repair':repair(statusOfPIrateShip,values[0],values[1],maxHealthCapacity); break;
        case 'Status':status(statusOfPIrateShip,maxHealthCapacity); break;
        case 'Retire': 
       console.log(`Pirate ship status: ${statusOfPIrateShip.reduce((a,c) => a+c,0)}`)
       console.log(`Warship status: ${statusOfWarShip.reduce((a,c) => a+c,0)}`)
       break;
      
      }
      if(isShipDead(statusOfWarShip)){
        console.log("You won! The enemy ship has sunken.");
        return;
      }
      if(isShipDead(statusOfPIrateShip)){
        console.log("You lost! The pirate ship has sunken.");
        return;
      }
      
        }
        function isShipDead(ship) {
           let deadSections =  ship.filter(x => x <= 0)
           return deadSections.length > 0;
            
        }
    function fire(statusOfWarShip,index,demage){
        if(index >= 0 && index < statusOfWarShip.length){
            statusOfWarShip[index]-=demage;

        }
    }
    function defend(statusOfPIrateShip,startIndex,endIndex,demage){
        if(startIndex >= 0 && startIndex < statusOfPIrateShip.length && endIndex >= 0 && endIndex < statusOfPIrateShip.length ){
           for (let i = startIndex; i <= endIndex; i++) {
             statusOfPIrateShip[i]-=demage
           }
            
        }
    }
    function repair(statusOfPIrateShip,index,heal,maxHealthCapacity){
        if(index >= 0 && index < statusOfPIrateShip.length){
            let missingHealth = maxHealthCapacity - statusOfPIrateShip[index]
             statusOfPIrateShip[index]+=Math.min(missingHealth,heal)  
        }
    }
    function status(statusOfPIrateShip,maxHealthCapacity){
       let demageSelection = statusOfPIrateShip.filter(x=> x < (maxHealthCapacity*0.2))
       console.log(`${demageSelection.length} sections need repair.`)
    }
}
manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
)