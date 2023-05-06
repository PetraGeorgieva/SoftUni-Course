function orders(type, n) {
    let result = 0
    switch (type) {
        case "coffee":
            result = 1.5 * n
            break;
        case "water":
            result = 1 * n
            break;
        case "coke":
            result = 1.4 * n
            break;
        case "snacks":
            result = 2 * n
            break;

    }
    return result.toFixed(2)
}
orders("water", 5)
