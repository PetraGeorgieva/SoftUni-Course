function storeProvision(stock, orderedProducts) {
    let myStore = {}
    addProduct(stock);
    addProduct(orderedProducts);
    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`)
    }
    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {

            let product = data[i]
            let quantity = Number(data[i + 1])
            if (myStore.hasOwnProperty(product)) {
                myStore[product] += quantity;
            } else {
                myStore[product] = Number(quantity);
            }
        }

    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)