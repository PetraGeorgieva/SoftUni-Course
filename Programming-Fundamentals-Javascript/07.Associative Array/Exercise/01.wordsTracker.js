function wordsTracker(params) {
    let map = new Map();
    let wordsToCheck = params.shift().split(' ');
    wordsToCheck.forEach(element => {
        map.set(element,Number(0))
    });
    for (let line of params) {
        for (let words of wordsToCheck) { 
        if(line === words){
                let currentQuantity =  Number(map.get(line)) 
                map.set(line, Number(currentQuantity + 1))
        }
    }
    }
    let sorted = Array.from(map.entries())
        .sort((a, b) => Number(b[1])- Number(a[1]));
    sorted.forEach(element => {
        console.log(`${element.join(' - ')}`);
    });
       
}
wordsTracker([
    'bla is', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )