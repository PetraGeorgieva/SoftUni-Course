function specialNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i < 10) {
            if (i === 5 || i === 7 || i === 11) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        } else {
            let secondPartOfTheNumber = i % 10;
            let sum = parseInt(i / 10) + secondPartOfTheNumber;
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        }
    }
}
specialNumber(20);