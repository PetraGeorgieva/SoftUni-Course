/* •Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
•	Every second time, when his shield brakes, his armor also needs to be repaired. 
*/
function gladiatorExpenses(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice ) {
    let counter = 0
    let result = 0;
    let shieldCounter = 0

    for (let i = 0; i < lostFightsCount; i++) {
       counter++
       
    if (counter % 2 === 0){
         result+=helmetPrice;
    } 
    if (counter % 3 === 0) {
        result+=swordPrice;
       
    }
    if (counter % 3 === 0 && counter % 2 === 0){
        result+=shieldPrice
        shieldCounter++
        if (shieldCounter % 2 === 0){
            result+=armorPrice
        }
    }
    
  }
      console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
    );