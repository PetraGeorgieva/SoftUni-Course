function counterStrike(params){
let initialEnergy =Number(params.shift());
let i = 0;
let counter = 0;
let result = 0;
while(params[i] !== 'End of battle'){
let pointBattle = Number(params[i])
 if((initialEnergy-=pointBattle) >= 0){
  counter++
 } else{
    initialEnergy+=pointBattle
    console.log(`Not enough energy! Game ends with ${counter} won battles and ${initialEnergy} energy`);
    return;
 }
 if(counter % 3 === 0){
     initialEnergy+=counter
 }
 i++
}
console.log(`Won battles: ${counter}. Energy left: ${initialEnergy}`)

}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])

