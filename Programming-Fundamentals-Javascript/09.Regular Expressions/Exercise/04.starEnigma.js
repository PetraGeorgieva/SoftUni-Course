function starEnigma(params){
let messeges = Number(params.shift());
let pattern = /[starSTAR]/g
let secondPattern = /@(?<planetName>[A-Z][a-z]+)[^-@!>:]*:(?<population>[\d]+)[^-@:>!]*!(?<attackordestruction>[AD])[^-@:>!]*![^-@:>!]*->[^-@:>!]*(?<soldierCount>\d+)/g
let result = ''
let attacked = [];
let destructed = [];
for (let i = 0; i < messeges; i++) {
    let mess =  params[i];
    let match = [...mess.matchAll(pattern)]
    for (let x = 0; x < mess.length; x++) {
        let text = mess[x]
        let textAsCodeAscii = text.charCodeAt()
        result +=String.fromCharCode(textAsCodeAscii-match.length)
  
    }
    let secondMatch = [...result.matchAll(secondPattern)]
    for (let y= 0; y < secondMatch.length; y++) {
        if(secondMatch[y].groups.attackordestruction == 'A'){
             if (!attacked.includes(secondMatch[y].groups.planetName)){
                attacked.push(secondMatch[y].groups.planetName)
             }
        }else if (secondMatch[y].groups.attackordestruction == 'D'){
            if(!destructed.includes(secondMatch[y].groups.planetName)){
                destructed.push(secondMatch[y].groups.planetName)
            }
        }
    }
}
  attacked = attacked.sort()
  destructed = destructed.sort()
  console.log(`Attacked planets: ${attacked.length}`)
  if(attacked.length == 0){
    console.log(`Destroyed planets: ${destructed.length}`)
  }else{
    for (let el of attacked) {
        console.log(`-> ${el}`);
      }
      console.log(`Destroyed planets: ${destructed.length}`)
  }
  if(destructed.length >0){
    for (let element  of destructed ) {
        console.log(`-> ${element}`);
      }
  }

}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']

)