function catalogue(params) {
    let newObj = {}
    for(let el of params){
        let [name,number] = el.split(' : ')
        newObj[name] = Number(number)
    }
let sortedKeys = Object.keys(newObj).sort((a, b) => a.localeCompare(b));
let groupChar = '';
for (let key of sortedKeys) {
if (groupChar !== key[0]) {
    groupChar = key[0];
    console.log(groupChar);
}
    console.log(`  ${key}: ${newObj[key]}`);
}
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )