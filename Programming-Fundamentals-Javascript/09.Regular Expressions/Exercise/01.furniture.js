function furniture(params) {
    let i = 0;
    let pattern = /([>]{2})(?<name>[A-Z]+[a-z]*)([<]{2})(?<price>[0-9.]+)!(?<quantity>\d+)/g
    let items = [];
    let result = 0;
    while (params[i] !== 'Purchase') {
        let text = params[i]
        let match = [...text.matchAll(pattern)]
        for (let j = 0; j < match.length; j++) {
            items.push(match[j].groups.name)
            let price = Number(match[j].groups.price) * Number(match[j].groups.quantity)
            result += price
        }
        i++
    }
    console.log(`Bought furniture:`)
    if(items.length >0){
        console.log(`${items.join('\n')}`)
    }
    console.log(`Total money spend: ${result.toFixed(2)}`)

}
furniture([
    '>Invalid<<!5',
    'Purchase']
)