function computerStore(array) {
    let priceWithoutTax = 0
    i = 0;
    let price = array[i]
    let tax = 0;
    let totalPrice = 0;
    let totalPriceDiscount = 0;
    let isTrue = true
    while (isTrue) {
        if(price === "special"|| price === 'regular'){
            isTrue = false;
            break;
        }
        price = Number(array[i])
        if (price < 0) {
            console.log('Invalid price!')
        } else {
            priceWithoutTax += price
            tax += (price *0.2)
        }
        i++
        price = array[i]
    }
    if (priceWithoutTax === 0) {
        console.log("Invalid order!");
    } else if(price === 'special' ){
      totalPrice = priceWithoutTax + tax;
  totalPriceDiscount = totalPrice *0.9
      console.log(`Congratulations you've just bought a new computer!`)
      console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`)
      console.log(`Taxes: ${tax.toFixed(2)}$`)
      console.log(`-----------`)
      console.log(`Total price: ${totalPriceDiscount.toFixed(2)}$`)
    } else if(price === 'regular' ){
        totalPrice = priceWithoutTax + tax;
            console.log(`Congratulations you've just bought a new computer!`)
            console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`)
            console.log(`Taxes: ${tax.toFixed(2)}$`)
            console.log(`-----------`)
            console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
