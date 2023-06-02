function treasureHunt(array) {
    let newArr = array.shift().split('|');
    let i = 0;
    let lines = array[i].split(' ');
    let command = lines[0];
    let items = lines.slice(1)
    let result = 0;
    while ( command !== "Yohoho!") {

        switch (command) {
            case 'Loot':
                for (let x = 0; x < items.length; x++) {
                    let item = items[x];
                    if (newArr.includes(item)) {
                        continue;
                    } else {
                        newArr.unshift(item);
                    }
                }
                break;
            case 'Drop':
                items = Number(items)
                 if (items >= 0 && items <= newArr.length) {
                let removed = newArr.splice(items,1)
                newArr.push(removed[0])
            } break;
            case 'Steal':
                items = Number(items)
                if (newArr.length >= items) {
                    let steal = newArr.splice(newArr.length - items, items)
                    console.log(`${steal.join(', ')}`)
                } else {
                    let steal = newArr.splice(0, newArr.length);
                    console.log(`${steal.join(', ')}`)
                }
                break;

        }
        i++
        lines = array[i].split(' ');
        command = lines[0];
        items = lines.slice(1)
    }
   
    if (newArr.length <= 0) {
        console.log("Failed treasure hunt.")
    } else {
        for (let j = 0; j < newArr.length; j++) {

            let element = newArr[j].length
            result += element
        }
        let averagecount = result / newArr.length
        console.log(`Average treasure gain: ${averagecount.toFixed(2)} pirate credits.`)
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);