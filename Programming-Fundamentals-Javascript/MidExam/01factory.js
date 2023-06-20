function biscuitFactory(array) {
let buscuitsPerDayperWorker = Number(array[0]);
let workers = Number(array[1]);
let competingFactory = Number(array[2]);
let biscutsPerDay = 0;
let result = 0;
for (let i = 1; i <= 30; i++) {
    if (i% 3 === 0){
        percent = buscuitsPerDayperWorker*0.75
        biscutsPerDay = percent*workers
        result+=Math.trunc(biscutsPerDay)
    } else {
        biscutsPerDay = buscuitsPerDayperWorker*workers
        result+=Math.trunc(biscutsPerDay)
    }
}
console.log(`You have produced ${result} biscuits for the past month.`)
if(result > competingFactory){
    let difference = (result-competingFactory);
    let percentage = (difference/competingFactory) * 100
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
}  
  if (competingFactory > result){
    let difference = (competingFactory-result)
    let  percentage = (difference/competingFactory) * 100
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
}
}
biscuitFactory(['78','8','16000']);