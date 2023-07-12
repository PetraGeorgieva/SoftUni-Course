function adAstra(params) {
    let textString = params.shift()
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<expirationData>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d]{1,5})\1/g
    let arr = [...textString.matchAll(pattern)];
    let totalCalories = 0;
    for (let match of arr) {
        totalCalories+=Number(match.groups.calories);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`)
    for (let match of arr) {
       console.log(`Item: ${match.groups.name}, Best before: ${match.groups.expirationData}, Nutrition: ${match.groups.calories}`)
    }
}
adAstra(['Hello|#Invalid food#19/03/20#450#$5*(@]'])