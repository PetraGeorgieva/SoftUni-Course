function shoppingList(input) {
    let initialList = input.shift().split('!');
    let i = 0;
    while (input[i] != 'Go Shopping!') {
        let [command, itemOne, itemTwo] = input[i].split(' ');
        let index = initialList.indexOf(itemOne);
        if (command === "Urgent") {
            if (!initialList.includes(itemOne)) {
                initialList.splice(0, 0, itemOne)
            }
        } else if (command === "Unnecessary") {
            if (initialList.includes(itemOne)) {
                initialList.splice(index, 1)
            } 
        } else if (command === "Correct") {
            if (initialList.includes(itemOne)) {
                initialList.splice(index,1,itemTwo)
            }
        } else if (command === "Rearrange") {
            if (initialList.includes(itemOne)) {
                let element = initialList.slice(index,index+1)
                initialList.splice(index,1);
                initialList.push(element[0]);
            }
        } 
        i++
    }
    console.log(initialList.join(', '));
    return;
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"bla Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

