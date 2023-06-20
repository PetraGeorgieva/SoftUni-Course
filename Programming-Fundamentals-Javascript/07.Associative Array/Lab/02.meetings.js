function meetings(array) {
    let assocArr = {} ;
    for (let i = 0; i < array.length; i++) {
        let [days,name] = array[i].split(' ');
        if(!assocArr.hasOwnProperty(days)){
            assocArr[days] = name;
            console.log(`Scheduled for ${days}`)
        } else{
            console.log(`Conflict on ${days}!`)
        }
    }
    for (let days in assocArr) {
     console.log(`${days} -> ${assocArr[days]}`);
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);