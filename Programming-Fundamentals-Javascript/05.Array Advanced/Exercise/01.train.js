function train(array){
    let newArray = array
    .shift()
    .split(' ')
    .map(Number);
    let maxCapacityofeachWagon = array.shift();
    for(let i = 0; i < array.length; i++){
        let [command, passengers] = array[i].split(' ')
        passengers = Number(passengers);
       
        if(command === 'Add'){
            newArray.push(passengers)
        } else{
            passengers = Number(command);
            for (let j = 0; j < newArray.length; j++) {
                 let num = newArray[j]
                 if(num+passengers <= maxCapacityofeachWagon){
                     newArray.splice(j,1)
                     newArray.splice(j,0,num+passengers);
                 } else{
                    continue;
                 }
                 break;
            }
        }

    }
    console.log(newArray.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)