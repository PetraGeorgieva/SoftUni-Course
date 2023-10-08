function printDeckOfCards (card) {
  let result = []
  let isTrue = true;

for (let el of card) {
  if(el.length === 3){
      let [face, faces,suits] = el.split('')
      face = face+=faces;
      
      let cardCreated =  createCard(face,suits);
      if(isTrue){
          result.push(cardCreated.fine)   
      }else{
          console.log(`Invalid card: ${face}${suits}`);
      }
     
  }else{
      let [face, suits] = el.split('')
      let cardCreated =  createCard(face,suits);
      if(isTrue){
          result.push(cardCreated.fine)   
      }else{
          console.log(`Invalid card: ${face}${suits}`);
          
      }

  }

   if ( isTrue == false){
      return;
   }
}
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
      let isCardFaceValid = cardFaces.includes(face);
      let isCardSuitsValid = Object.keys(carSuits).includes(suits);
      if(isCardFaceValid && isCardSuitsValid){
       return  {
            face,
            suits,
            fine: `${face}${carSuits[suits]}`
            } 
        } else{
          isTrue = false;
      }
    }
  if(isTrue){
      console.log(`${result.join(', ')}`);
  }
}
printDeckOfCards(['AS', '11H', 'KH', '2C'])