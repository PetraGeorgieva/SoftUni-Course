function arrayModifier(params) {
    let initialInputLine = params.shift().split(' ').map(x=>Number(x));
    for (let i = 0; i < params.length; i++) {
      let [command,index,secondIndex] = params[i].split(' ');
      index = Number(index);
      secondIndex = Number(secondIndex);
      switch (command) {
        case 'swap':
            let element =  initialInputLine.slice(index,index+1)
            let secondElement = initialInputLine.slice(secondIndex,secondIndex+1);
            initialInputLine.splice(index,1,secondElement[0])
            initialInputLine.splice(secondIndex,1,element[0])
            
            break;
        case 'multiply':
            let element2 = initialInputLine.slice(index,index+1);
            let secondElement2 = initialInputLine.slice(secondIndex,secondIndex+1);
            let result =  element2[0] * secondElement2[0];
            initialInputLine.splice(index,1,result);
            break;
        case 'decrease':
            initialInputLine= initialInputLine.map((x) =>  x-1);
            break;
      }
        
    } console.log(initialInputLine.join(', '));
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )