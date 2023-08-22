function listOfNames(params) {
    let sorted = params.sort((a,b)=> a.localeCompare(b))
    let n = 0
    sorted.forEach(element => {
        n++
        console.log(`${n}.${element}`)
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"])