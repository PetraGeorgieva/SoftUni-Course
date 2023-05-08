function loadingBar(n) {
    let howMuchIsLoading = n / 10;
    let result = ''
    if (n < 100) {
        result = `${n}% [`
        for (let i = 0; i < howMuchIsLoading; i++) {
            result += `%`
        }
        for (let j = howMuchIsLoading + 1; j <= 10; j++) {
            result += `.`
        }
        result += `]`
        console.log(result)
        console.log('Still loading...');
    }
    else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);