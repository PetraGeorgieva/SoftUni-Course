function wordOccurrences(params) {
    let map = new Map();
    for (let line of params) {
        let times = 0;
        if (!map.has(line)) {
            times = 1
            map.set(line, times)
        } else {
            let currentQuantity =  Number(map.get(line)) 
            map.set(line, currentQuantity + 1)
        }
    }
    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1]- a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${(kvp[1])} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])