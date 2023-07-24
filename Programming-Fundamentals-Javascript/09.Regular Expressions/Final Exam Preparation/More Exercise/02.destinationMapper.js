function destionationMapper(locatin) {
    let pattren = /([=/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g ;
    let result = 0;
    let matched = [...locatin.matchAll(pattren)]
    let finalLocation = []
    for (let match of matched) {
        result+=match.groups.destination.length
        finalLocation.push(match.groups.destination)
    }
console.log(`Destinations: ${finalLocation.join(', ')}`);
console.log(`Travel Points: ${result}`)
}
destionationMapper("ThisIs some InvalidInput");