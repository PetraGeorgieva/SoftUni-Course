function poundsToDollars (num) {
    let oneBritishPound = 1.31;
    let poundsIntoDollars = num * oneBritishPound;
    console.log(poundsIntoDollars.toFixed(3))
}
poundsToDollars(80);