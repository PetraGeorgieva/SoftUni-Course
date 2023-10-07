function printDeckOfCards (card) {
    let result = []
    card.forEach(el => {
        if(el.length === 3){
            let [face, faces,suits] = el.split('')
            face = face+=faces;
            let cardCreated =  createCard(face,suits);
              result.push(cardCreated.fine)   
        }else{
            let [face, suits] = el.split('')
            let cardCreated =  createCard(face,suits);
        
              result.push(cardCreated.fine)

        }
       
    });
    function createCard(face, suits) {
        const cardFaces = [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
          "A",
        ];
        const carSuits = {
          S: "\u2660",
          H: "\u2665",
          D: "\u2666",
          C: "\u2663",
        };
        isCardFaceValid = cardFaces.includes(face);
        isCardSuitsValid = Object.keys(carSuits).includes(suits);
        if(isCardFaceValid && isCardSuitsValid){
         return  {
              face,
              suits,
              fine: `${face}${carSuits[suits]}`
              } 
          } else{
            console.log(`Invalid card: ${face}${suits}`);
        }
      }

      console.log(`${result.join(', ')}`);
}
printDeckOfCards(['AS', 'HD', 'KH', '2C'])