function factorialDivision(a, b) {
    let firsfactoral = calculatorForFactoral(a);
    let secondfactoral = calculatorForFactoral(b);
    let result = firsfactoral / secondfactoral
    return result.toFixed(2);
    function calculatorForFactoral(n) {
        let factoral = 1;
        for (let i = n; i > 1; i--) {
            factoral *= i;
        }
        return factoral;
    }


}
console.log(factorialDivision(5, 2));