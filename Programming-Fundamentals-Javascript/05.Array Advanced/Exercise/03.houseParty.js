function houseParty(input) {
    let guestsList = []
    for (let i = 0; i < input.length; i++) {
        let [name, is, command] = input[i].split(' ')
        if (command === "going!") {
            if(guestsList.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
                guestsList.push(name);
            }

        }else if(command === "not"){
            if(guestsList.includes(name)){
                for (let i = 0; i < guestsList.length; i++) {
                      if (guestsList[i] === name){
                        guestsList.splice(i,1);
                        break;
                      }
                }
            } else{
               console.log(`${name} is not in the list!`)
            }
        }
    }
     console.log(guestsList.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'] );
//1881,40