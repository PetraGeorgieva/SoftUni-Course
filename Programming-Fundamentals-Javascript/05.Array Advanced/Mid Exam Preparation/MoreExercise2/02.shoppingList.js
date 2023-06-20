function shoppingList(input) {
    let initialList = input.shift().split('!');
    let i = 0;
    while (input[i] != 'Go Shopping!') {
        let [command, itemOne, itemTwo] = input[i].split(' ');
        let index = initialList.indexOf(itemOne);
        switch (command){
        case  "Urgent": urgent(initialList,itemOne) 
        break;
        case "Unnecessary":unnecessary(initialList,itemOne,index)
        break;
        case "Correct": correct(initialList,itemOne,itemTwo,index) 
        break;
        case "Rearrange": rearrange(initialList,itemOne,index)
         break;
        } 
        i++
    }
    console.log(initialList.join(', '));
    return;

    function urgent(initialList,itemOne){
        if (!initialList.includes(itemOne)) {
            initialList.splice(0, 0, itemOne)
        }
    }
    function unnecessary(initialList,itemOne,index){
        if (initialList.includes(itemOne)) {
            initialList.splice(index, 1)
        } 
    }
    function correct(initialList,itemOne,itemTwo,index){
        if (initialList.includes(itemOne)) {
            initialList.splice(index,1,itemTwo)
        }
    }
    function rearrange(initialList,itemOne,index){
        if (initialList.includes(itemOne)) {
            let element = initialList.slice(index,index+1)
            initialList.splice(index,1);
            initialList.push(element[0]);
        }
    }
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"bla Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

