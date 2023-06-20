function friendsList(array) {
let friends = array.shift().split(', ');
let i = 0;
while (array[i] != 'Report'){
    let [command , index, names] = array[i].split(' ');
    if (command === 'Blacklist'){
        if (friends.indexOf(index) < 0){
            console.log(`${index} was not found.`)
        }else{
            let name = 'Blacklisted'
            friends.splice(friends.indexOf(index),1,name);
            console.log(`${index} was blacklisted.`)
        }
    } else if (command === 'Error'){
        index = Number(index);
        if (index >= 0 && index < friends.length){
            if (friends[index] != 'Blacklisted' && friends[index] != 'Lost' ){
                let name = friends[index]
                friends[index] = 'Lost';
                console.log(`${name} was lost due to an error.`)
            }
        }
    } else if (command === 'Change'){
        index = Number(index)
        if (index >= 0 && index < friends.length){
            let currentName =  friends[index];
            friends.splice(index,1,names);
            console.log(`${currentName} changed his username to ${names}.`)
        }
    }
    i++
}
 let countOfBlacklisted = friends.filter(x=> x == 'Blacklisted');
 let countofLosted = friends.filter(x => x == 'Lost');
 console.log(`Blacklisted names: ${countOfBlacklisted.length}`);
 console.log(`Lost names: ${countofLosted.length}`);
 console.log(`${friends.join(' ')}`);

}
friendsList(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])