function partyTime(params) {
    let i = 0;
    let vip = new Map();
    let regular =new Map();
    let Vipguess = 0;
    let regularGuess = 0;
    while(params[i] !== 'PARTY'){
        let digit = Number(params[i][0])
        if(isNaN(digit)){
            regular.set(regularGuess++,params[i],)
        }else{
       vip.set(Vipguess++,params[i])
        }
        i++
    }
    let vipArr = [...vip.entries()];
    let regularArr = [...regular.entries()];
    for (let j = (params.indexOf('PARTY')+1); j < params.length; j++) {
     let vipWhoCame =  vipArr.filter(x=> x.includes(params[j]))
     let indexOfTheVipGuest = vipArr.indexOf(vipWhoCame[0])
     if(indexOfTheVipGuest >= 0 && indexOfTheVipGuest < vipArr.length){
        vipArr.splice(indexOfTheVipGuest,1);
     }
     let regularWhoCame =  regularArr.filter(x=> x.includes(params[j]))
     let indexOfTheRegularGuest = regularArr.indexOf(regularWhoCame[0])
     if(indexOfTheRegularGuest >= 0 && indexOfTheRegularGuest < regularArr.length){
        regularArr.splice(indexOfTheRegularGuest,1);
     }
    }

    console.log(regularArr.length+vipArr.length)
   vipArr.forEach(element => {
        console.log(element[1])
    });
    regularArr.forEach(element => {
        console.log(element[1])
    });
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'9NoBUajQ',
'SVQXQCbc',
'Ce8vwPmE',
'Ce8vwPmE',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)