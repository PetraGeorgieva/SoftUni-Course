function cardGame(params) {
    let cardPowerEnum = {
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
      "9": 9,
      "10":10,
      "J":11,
      "Q":12,
      "K":13,
      "A":14,
      
    }
    let cardTypeEnum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    let players = new Map();
    for (let line of params) {
        let[player,cards] = line.split(': ');
        let cardsArr = cards.split(', ')
        if(!players.has(player)){
         players.set(player,new Set())
        }
          for (let card of cardsArr) {
            players.get(player).add(card)
          }
    }
    for (let playersInfo of [...players]) {
       let sum = 0;
       for (let cardss of [...playersInfo[1]]) {
        let cardInfo = cardss.split("");
        let powerAsString = cardInfo.splice(0,cardInfo.length-1).join("");
        let typeAsString = cardInfo.splice(cardInfo.length-1);
        let power = cardPowerEnum[powerAsString];
        let type = cardTypeEnum[typeAsString];
        sum+=power*type;
       }
       console.log(playersInfo[0] +': ' + sum)
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )