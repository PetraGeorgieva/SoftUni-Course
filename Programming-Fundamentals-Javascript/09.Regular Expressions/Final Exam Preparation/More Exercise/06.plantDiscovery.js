function plantDiscovery(params) {
    let n = Number(params.shift());
    let map = {}
    let pattern = /\s*[:-]\s*/g;
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = params[i].split('<->');
        rarity = Number(rarity)
        map[plant] = {}
        map[plant]['rarity'] = rarity
        map[plant]['rating'] = 0;
        map[plant]['counter'] = 0;
    }
    let index = n
    while (params[index] != 'Exhibition') {
        let commands = params[index].split(pattern)
        if (commands[0] === 'Rate') {
            let plant = commands[1];
            let rating = Number(commands[2]);
            if(map.hasOwnProperty(plant)){
           let currentCounter =  map[plant]['counter'];
           currentCounter++
           map[plant]['counter'] = currentCounter
           let currentRating =  map[plant]['rating'];
           map[plant]['rating'] = currentRating+=rating
            }else{
                console.log('error')
            }
        } else if (commands[0] === 'Update') {
            let plant = commands[1];
            let newRarity = Number(commands[2]);
            if(map.hasOwnProperty(plant)){
                map[plant]['rarity'] = newRarity;
            }else{
                console.log('error')
            }

        } else if (commands[0] === 'Reset') {
            let plant = commands[1];
            if(map.hasOwnProperty(plant)){
                map[plant]['rating'] = 0;
                map[plant]['counter'] = 0;
            } else{
                console.log('error')
            }
        }
        index++
    }
    console.log('Plants for the exhibition:');
    let arrObj = Object.entries(map)
    for (let [name,obj] of arrObj) {
        let objArr = Object.entries(obj)
        let counters = objArr[2][1]
        if(counters === 0){
          counters = 1
        }
        console.log(`- ${name}; Rarity: ${objArr[0][1]}; Rating: ${(objArr[1][1] / counters).toFixed(2)}`)
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
