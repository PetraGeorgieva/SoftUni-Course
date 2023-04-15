function dungeonestDark(input) {
    let initalHealth = 100;
    let initialCoins = 0;
    let counter = 0
    
    let rooms =  input[0].split("|"); // create a new array rooms and push every "room" in the input array divided by the symbol(|)
    for (let room of rooms) { // create  a For-of Loop cycle to iterates through all elements "room" in rooms
        let commands =  room.split(" "); // divided rooms by " " 
        let command = commands[0];      // and the element on the left is the name
        let value = Number(commands[1]); //  on the right is the value
        switch (command) {     // switch case by the name if the command
            case "potion":
                counter++
                if(initalHealth + value > 100){
                    value = 100 - initalHealth
                    initalHealth = 100
                   console.log(`You healed for ${value} hp.`);
                   console.log(`Current health: ${initalHealth} hp.`)
                } else {
                    initalHealth+=value;
                    console.log(`You healed for ${value} hp.`);
                   console.log(`Current health: ${initalHealth} hp.`)
                }
                break;
        
            case "chest":
                counter++
            initialCoins+=value
            console.log(`You found ${value} coins.`)
                break;
            default:
                counter++
              if(initalHealth > value){
                initalHealth-=value
                console.log(`You slayed ${command}.`)
              } else {
                console.log(`You died! Killed by ${command}.` )
                console.log(`Best room: ${counter}`)
                return;
              }
                break;

        }
    }
      if (initalHealth > 0){
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initalHealth}`);
      }
       
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);