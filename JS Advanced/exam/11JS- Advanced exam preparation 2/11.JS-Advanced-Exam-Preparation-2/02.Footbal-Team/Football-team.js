class footballTeam {
  constructor(clubName,country){
    this.clubName  =clubName;
    this.country = country;
    this.invitedPlayers = [];
   
  }
  newAdditions(footballPlayers){
    for (let elem  of footballPlayers) {
        let [name,age,playerValue] = elem.split('/');
        playerValue = Number(playerValue)
    let isTrue = true
    this.invitedPlayers.forEach(el=>{
        if(el.hasOwnProperty(name)){
            isTrue = false
            let currenValue = el[age]
            if(playerValue > currenValue){
                el = {name,age,playerValue}
            }
        }
    })

    if(isTrue == true){
     this.invitedPlayers.push({name,age,playerValue})
    }
    }
    
         let result = `You successfully invite `
     this.invitedPlayers.forEach(el=>{
        result+=`${el.name}, `
    });
    result = result.substring(0,result.length-2);
    result+='.'
    return result
  }
  signContract(selectedPlayer){
    let[names,playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer)
    let isplayer = false;
    this.invitedPlayers.forEach(el=> {
        if(el['name'] === names){
            isplayer = true;
            let current = Number(el.playerValue)
            if(current>playerOffer){
                let priceDifference = current-playerOffer
                throw new Error(`The manager's offer is not enough to sign a contract with ${names}, ${priceDifference} million more are needed to sign the contract!`)
            }else{
                el.playerValue = 'Bought'
            }
        }
        
        });
    if(isplayer == false){
        throw new Error(`${names} is not invited to the selection list!`)
    }else {
        return   `Congratulations! You sign a contract with ${names} for ${playerOffer} million dollars.`
    }
  }
  ageLimit(names,ages){
    let isHereThePlayer = false
    let  difference = 0;
    this.invitedPlayers.forEach(el =>{
        if(el['name'] === names){
          isHereThePlayer = true;
          if(el['age'] < ages){
             difference = ages - Number(el['age']);
          }
        }
    })
    if(isHereThePlayer == false){
        throw new Error(`${names} is not invited to the selection list!`)
    }
    if(difference <= 0){
       return `${names} is above age limit!`
    } else if(difference > 0 && difference < 5){
    return `${names} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
    }else if(difference >5){
    return `${names} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
    }
  }
  transferWindowResult(){
    let result = `Players list:`
    this.invitedPlayers.forEach(el=>{
        result+=`\nPlayer ${el['name']}-${el['playerValue']}`
    })
    return result;
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

