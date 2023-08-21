function thePianist(params){
let artistNumber = Number(params.shift());
let favoritePinoPieces = {}
for (let i = 0; i < artistNumber; i++) {
    let [artistName,pieces,key] = params[i].split('|')
    favoritePinoPieces[artistName] = {}
    favoritePinoPieces[artistName]['pieces'] = pieces;
    favoritePinoPieces[artistName]['key'] = key;
    
}
let index = artistNumber
while(params[index] !== 'Stop'){
  let commands = params[index].split('|');
  switch (commands[0]) {
    case 'Add': add(favoritePinoPieces,commands[1],commands[2],commands[3]);
        break; 
    case 'Remove': remove(favoritePinoPieces,commands[1]);
        break;
    case 'ChangeKey': changeKey(favoritePinoPieces,commands[1],commands[2]);
        break;
}
  index++
}
function add(object,piece,composer,keyes) {
    if(!object.hasOwnProperty(piece)){
        object[piece] = {}
        object[piece]['pieces']= composer
        object[piece]['key'] = keyes;
        console.log(`${piece} by ${composer} in ${keyes} added to the collection!`)
    }else{
        console.log(`${piece} is already in the collection!`)
    }
}
function remove(object,piece){
   if (object.hasOwnProperty(piece)){
        delete object[piece]
        console.log(`Successfully removed ${piece}!`)
    }else{
       console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
}
function changeKey(object,piece,keyes){
    if (object.hasOwnProperty(piece)){
        object[piece]['key'] = keyes;
         console.log(`Changed the key of ${piece} to ${keyes}!`)
     }else{
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
     }
 }
let arrObj = Object.entries(favoritePinoPieces);
for (let [name,obj] of arrObj) {
    let objArr = Object.entries(obj);
    console.log(`${name} -> Composer: ${objArr[0][1]}, Key: ${objArr[1][1]}`)
}
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )