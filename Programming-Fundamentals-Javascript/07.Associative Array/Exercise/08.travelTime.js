function travelTime(params) {
    let travelDestination = new Map();
    for (let line of params) {
        let [destination,city,cost] = line.split(' > ');
        cost = Number(cost)
        if(!travelDestination.has(destination)){
            travelDestination.set(destination, new Map());
        }
    if( travelDestination.get(destination).has(city)){
        let currentValue = Number( travelDestination.get(destination).get(city));
        travelDestination.get(destination).set(city,Math.min(currentValue,cost))
    } else{
        travelDestination.get(destination).set(city,cost)
    }  
    }
    let travelDestinationArr = Array.from(travelDestination.entries()).sort((a,b)=> a[0].localeCompare(b[0]))
    for (let lineOfCity of travelDestinationArr) {
        let travelDestinationCosArr = Array.from(lineOfCity[1].entries()).sort((a, b) => a[1] - b[1]);
        let result = ''
        for (let cityes of travelDestinationCosArr) {     
        result+=`${cityes[0]} -> ${cityes[1]} `
        }
        console.log(`${lineOfCity[0]} -> ${result}`);
        result = ''
}
    }
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )