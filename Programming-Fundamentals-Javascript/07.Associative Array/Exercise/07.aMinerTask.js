function aMinerTask(params) {
 let miner = new Map();
 for (let i = 0; i < params.length; i+=2) {
    if(i%2 === 0){
     if(!miner.has(params[i])){
        miner.set(params[i],Number(params[i+1]))
     }else{
        let currentValue = Number(miner.get(params[i]))
        miner.set(params[i],Number(params[i+1])+currentValue)
     }
    }
 }
 let minerArr = [...miner.entries()]
 for(let [key,values] of minerArr) {
    console.log(`${key} -> ${values}`)
 }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '24'
    ]);