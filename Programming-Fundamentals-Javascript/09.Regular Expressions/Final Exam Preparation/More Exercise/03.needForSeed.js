function needForSpeed(params) {
    let n = Number(params.shift());
    let garage ={};
    for (let i = 0; i < n ; i++) {
        let [name,mileage,fuel] = params[i].split('|')
        garage[name] = {};
        garage[name]['mileage'] = Number(mileage)
        garage[name]['fuel'] = Number(fuel)
    }
    let j = n
    while (params[j] !== 'Stop'){
        let commands =  params[j].split(' : ');
        switch (commands[0]) {
            case 'Drive': drive(garage,commands[1],Number(commands[2]),Number(commands[3]));
                break; 
            case 'Refuel': refuel(garage,commands[1],Number(commands[2]));
                break;
            case 'Revert': revert(garage,commands[1],Number(commands[2]));
                break;
        }
        j++
    }
    function drive(garage,car,distance,fuels) {
          let currentFuel = garage[car]['fuel'];
          let currentMileage =  garage[car]['mileage'] 
          if (currentFuel >= fuels){
            garage[car]['fuel'] = currentFuel-=fuels
            garage[car]['mileage'] = currentMileage+=distance
            console.log(`${car} driven for ${distance} kilometers. ${fuels} liters of fuel consumed.`)
          }else{
            console.log( "Not enough fuel to make that ride")
          }
        if(garage[car]['mileage'] >= 100000){
            console.log(`Time to sell the ${car}!`)
            delete garage[car]
        }
        
    }
    function refuel(garage,car,fuels) {
        let currentFuel = garage[car]['fuel'] 
        let differnce = 75-currentFuel
        let amountRecovery = Math.min(differnce,fuels)
        garage[car]['fuel'] = currentFuel+=amountRecovery
        console.log(`${car} refueled with ${amountRecovery} liters`)
    }
    function revert(garage,car,kilometers) {
        let currentMileage = garage[car]['mileage'];
        garage[car]['mileage'] = currentMileage-=kilometers
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        if(garage[car]['mileage'] < 10000){
            garage[car]['mileage'] = 10000
        }
    }
    let objArr = Object.entries(garage)
    for ( let [name,obj] of objArr) {
      let objArray = Object.entries(obj)
        console.log(`${name} -> Mileage: ${objArray[0][1]} kms, Fuel in the tank: ${objArray[1][1]} lt.`)
      
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
   ]
   );