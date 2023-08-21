function fruits(fruit,needGr,priceKg) {
    let needKg = needGr/1000;
    let totalPrice = needKg * priceKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${needKg.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80)