function lift(array) {
    let howManyPeopleOntheLift = Number(array.shift())
    let currentStateoftheLift = array.shift().split(' ').map(x => Number(x));
    let difference = howManyPeopleOntheLift;
    for (let i = 0; i < currentStateoftheLift.length; i++) {
        if (currentStateoftheLift[i] === 0) {
            difference -= 4
            if (difference >= 0) {
                currentStateoftheLift.splice(i, 1, 4)
            } else if (difference < 0) {
                let howmanypeople = difference += 4
                currentStateoftheLift.splice(i, 1, howmanypeople);
                console.log('The lift has empty spots!')
                console.log(currentStateoftheLift.join(' '))
                return;
            }
        } else if (currentStateoftheLift[i] > 0) {
            let howmanypeople = 4 - currentStateoftheLift[i]
            difference -= howmanypeople
            if (difference >= 0) {
                currentStateoftheLift.splice(i, 1, 4);
            } else if (difference < 0) {
                let howmanypeople = difference += 4
                currentStateoftheLift.splice(i, 1, howmanypeople);
                console.log('The lift has empty spots!')
                console.log(currentStateoftheLift.join(' '))
                return;
            }
        }

    }
    if (difference > 0) {
        console.log(`There isn't enough space! ${difference} people in a queue!`)
        console.log(currentStateoftheLift.join(' '))
    } else{
        console.log(currentStateoftheLift.join(' '))
    }
}
lift([
    "12",
    "0 0 0"
]

)