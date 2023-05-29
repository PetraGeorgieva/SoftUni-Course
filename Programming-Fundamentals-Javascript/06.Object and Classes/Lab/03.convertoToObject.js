function convertToObject(json){
let person = JSON.parse(json);
for (let [key,values] of Object.entries(person)) {
    console.log(`${key}: ${values}`)
}

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')