function convertToJSON(firstName, lastName, hairColor ){
let person = {
    name: firstName,
    lastName,
    hairColor,
}
 console.log(JSON.stringify(person))
}
convertToJSON('George', 'Jones', 'Brown')