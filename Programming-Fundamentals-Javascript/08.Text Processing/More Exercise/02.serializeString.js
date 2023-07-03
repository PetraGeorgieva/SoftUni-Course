function serializeString(string) {
    let newMap = new Map()
    let text = string[0]
    for (let i = 0; i < text.length; i++) {
        let letter = text[i]
        if(!newMap.has(letter)){
            newMap.set(letter,[i])
        } else{
            newMap.get(letter).push(i)
        }
        
    }
    let mapArr = [...newMap.entries()]
    for(let [key,values] of mapArr) {
        console.log(`${key}:${values.join('/')}`)
     }
}
serializeString(["avjavamsdmcalsdm"])