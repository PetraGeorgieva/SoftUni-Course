function muOnline(string) {
    let newArray = string.split('|')
    let initialHealth = 100;
    let initialBitcoin = 0;
    let counter = 0;
    let finalHealth = 0;
    let currentHealth = 0;
    for (let i = 0; i < newArray.length; i++) {
        let [command, number] = newArray[i].split(' ');
        number = Number(number);
        if (command === 'potion') {

            finalHealth = 100 - initialHealth
            currentHealth = initialHealth += number
            if (currentHealth >= 100) {
                counter++
                initialHealth = 100
                console.log(`You healed for ${finalHealth} hp.`)
                console.log(`Current health: ${initialHealth} hp.`)
            } else {
                counter++
                console.log(`You healed for ${number} hp.`)
                console.log(`Current health: ${initialHealth} hp.`)
            }
        } else if (command === 'chest') {
            counter++
            initialBitcoin += number;
            console.log(`You found ${number} bitcoins.`)
        } else {
            counter++
            initialHealth -= number
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${initialBitcoin}`);
    console.log(`Health: ${initialHealth}`);

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
