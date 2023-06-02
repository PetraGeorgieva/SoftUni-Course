function inventory(input){
    let initialList = input.shift().split(', ');
    let i = 0;
    while (input[i] != 'Craft!') {
        let [command, itemOne] = input[i].split(' - ');
        let index = initialList.indexOf(itemOne);
        let [oldElement,newElement ] = itemOne.split(':')
        if (command === "Collect") {
            if (!initialList.includes(itemOne)) {
                initialList.push(itemOne)
            }
        } else if (command === "Drop") {
            if (initialList.includes(itemOne)) {
                initialList.splice(index, 1)
            } 
        } else if (command === "Combine Items") {   
            if (initialList.includes(oldElement)) {
                index = initialList.indexOf(oldElement)
                initialList.splice(index+1,0,newElement);
            }
        } else if (command === "Renew") {
            if (initialList.includes(itemOne)) {
            let element = initialList.splice(index,1);
            initialList.push(element[0]);
            }
        } 
        i++
    }
    console.log(initialList.join(', '));
    return;
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );