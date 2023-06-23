function sequences(params) {
    let input = params
        .map(x => JSON.parse(x))
        .map(x => x.sort((a, b) => b - a))
        .map(x => JSON.stringify(x));
    let set = new Set(input);
    let setArr = [...set.keys()].map(x => JSON.parse(x))
    let filtered = setArr.sort((a,b)=> a.length - b.length);
     
    filtered.forEach(el => console.log(`[${el.join(', ')}]`));

}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)