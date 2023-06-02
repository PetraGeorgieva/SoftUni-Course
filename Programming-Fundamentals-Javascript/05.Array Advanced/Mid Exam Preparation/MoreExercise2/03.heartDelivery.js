function heartDelivery(params) {
    let neighborhood = params.shift().split('@').map(x => Number(x))
    let i = 0;
    let index = 0;
    while (params[i] != 'Love!') {
        let [command, length] = params[i].split(' ');
        length = Number(length);
        if (command === 'Jump') {
            index += length
            if (index >= neighborhood.length) {
                index = 0;
            }
            let numberDecresed = neighborhood.slice(index, index + 1);
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} already had Valentine's day.`)
            } else {
                numberDecresed -= 2
                neighborhood.splice(index, 1, numberDecresed)
                hasOrNotValentine = neighborhood.indexOf(numberDecresed)
                if (neighborhood[hasOrNotValentine] === 0) {
                    console.log(`Place ${index} has Valentine's day.`)
                }
            }

        }
        i++
    }
    console.log(`Cupid's last position was ${index}.`);
    let filter = neighborhood.filter(x => x <= 0);
    if (filter.length === neighborhood.length) {
        console.log(`Mission was successful.`);
    } else {
        let differnceOfHouses = neighborhood.length - filter.length
        console.log(`Cupid has failed ${differnceOfHouses} places.`);
    }
}
heartDelivery(["2@2@0@0",
"Jump 1",
"Jump 2",
"Love!"])

