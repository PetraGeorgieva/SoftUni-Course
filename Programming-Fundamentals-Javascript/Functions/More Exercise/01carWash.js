function carWasher(array) {
    let value = 10;
    let command = ''
    for (let i = 1; i < array.length; i++) {
        command = array[i];
        switch (command) {
            case "soap":
                value += 10
                break;
            case "water":
                value *= 1.2
                break;
            case "vacuum cleaner":
                value *= 1.25
                break;
            case "mud":
                value *= 0.9
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWasher(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);