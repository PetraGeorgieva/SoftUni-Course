function degustation(params) {
    let i = 0;
    let likedFood = {}
    let unlikedFood = {}
    while(params[i] !== 'Stop'){
        let commands = params[i].split('-')
        if(commands[0] === 'Like'){
            let guest = commands[1];
            let meal = commands[2];
            if(!likedFood.hasOwnProperty(guest)){
                likedFood[guest] =[]
                likedFood[guest].push(meal)
            }else{
                if(!likedFood[guest].includes(meal))
                likedFood[guest].push(meal)
            }

        }else if (commands[0] === 'Dislike'){
            let guest = commands[1];
            let meal = commands[2];
            if(likedFood.hasOwnProperty(guest)){
                if(likedFood[guest].includes(meal)){
                    let index =  likedFood[guest].indexOf(meal);
                    let mealToDislike = likedFood[guest].splice(index,1)
                      unlikedFood[guest] = []
                      unlikedFood[guest].push(mealToDislike);
                      console.log(`${guest} doesn't like the ${meal}.`)
                }else{
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
            }else{
                console.log(`${guest} is not at the party.`)
            }

        }
        i++
    }

  let arr = Object.entries(likedFood)
  let secondArr = Object.entries(unlikedFood)
  for (let el of arr) {
    console.log(`${el[0]}: ${el[1].join(', ')}`);
    
  }
 if(secondArr.length > 0){
    console.log(`Unliked meals: ${secondArr.length}`)
 }else{
    
  console.log(`Unliked meals: 0`)
 }

}
degustation(['Like-Katy-fish',
    'Dislike-Katy-fish',
    'Stop'])