function arrayManipulations(array) {
    let newArray = array
    .shift()
    .split(' ')
    .map(Number);
for(let i = 0;i < array.length; i++){
    let [command,firstNum,secondNum] =
    array[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
        case 'Add':
            newArray.push(firstNum);
            break;
        case 'Remove':
            newArray = newArray.filter(el => el !==firstNum)
            break;
        case 'RemoveAt':
            newArray.splice(firstNum,1);
            break;
        case 'Insert':
        newArray.splice(secondNum,0,firstNum);
            break;
    }
}
     console.log(newArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);