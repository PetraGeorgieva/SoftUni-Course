function mathOperations(n, n2, operator) {
    let result = 0;
    n = Number(n)
    n2 = Number(n2)
    switch (operator) {
        case '*':
            result = n * n2;
            console.log(result)
            break;
        case '/':
            result = n / n2;
            console.log(result)
            break;
        case '-':
            result = n - n2;
            console.log(result)
            break;
        case '+':
            result = n + n2;
            console.log(result)
            break;
        case '%':
            result = n % n2;
            console.log(result)
            break;
        case '**':
            result = n ** n2;
            console.log(result)
            break;
    }
}
mathOperations(5, 6, '+')