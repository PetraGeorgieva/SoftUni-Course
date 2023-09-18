function townPopolation(arr) {
    let obj ={};
    for (let command of arr) {
        let [town,population] = command.split(' <-> ');
        population = Number(population)
        if(obj.hasOwnProperty(town)){
           let currentPopulation = obj[town];
           obj[town] = currentPopulation+=population
        }else{
            obj[town] = population
        }

    }
for (const key in obj) {
   console.log(`${key} : ${obj[key]}`)
}
}
townPopolation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)