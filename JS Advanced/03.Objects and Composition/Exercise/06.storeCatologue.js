function storeCatologue(params) {
    let obj = {}
 for (let commands of params) {
   let [name,price] = commands.split(' : ');
   price = Number(price)
   obj[name] = price;
 }
 let objArr = Object.entries(obj).sort()
 let groupChar = ''
 for (let [key,value] of objArr) {
    if (groupChar !== key[0]) {
        groupChar = key[0];
        console.log(groupChar);
    }
    console.log(`  ${key}: ${value}`)
 }
}
storeCatologue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);