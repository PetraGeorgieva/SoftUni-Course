function race(params) {
    let partecipants = params.shift().split(', ');
    let i = 0;
    let result = new Map()
    let namePattern = /[A-Za-z]/g;
    let pointsPattern = /[0-9]/g;
  for (const partecipant of partecipants) {
        result.set(partecipant,0)
  }
  for (let line of params) {
    if(line === 'end of race'){
        break;
    }
    let name = line.match(namePattern).join('');
    let distance = line.match(pointsPattern);
    let tempDistance = 0;
    for (let el of distance) {
        tempDistance+=Number(el);
    }
    if(result.has(name)){
      let points = Number(result.get(name));
      result.set(name,(points+tempDistance))
    }
  }
  let resultArr = [...result.entries()].sort((a,b) => b[1]-a[1])
  let counter = 1
console.log(`1st place: ${resultArr[0][0]}
2nd place: ${resultArr[1][0]}
3rd place: ${resultArr[2][0]}
`)
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)