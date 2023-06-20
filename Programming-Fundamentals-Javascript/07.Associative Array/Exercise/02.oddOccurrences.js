function oddOccurences(params) {
    let map = new Map();
    let input = params.split(' ').map(el => el.toLowerCase());
    let counter  = 0;
    for (let line of input) {
       if (!map.has(line)){
          counter = 1;
          map.set(line,counter)
       } else {
        let currrentValue = Number(map.get(line));
        map.set(line,currrentValue+1)
       }
    }
    let sorted = Array.from(map.entries())
    let filtered = sorted.filter((a) => ((a[1]) % 2 !== 0))
                        .map((a) => a[0]);
        console.log(filtered.join(' '));
    
}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')