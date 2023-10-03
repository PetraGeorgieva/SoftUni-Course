//•	Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//•	Valid card suits are: S (♠), H (♥), D (♦), C (♣)

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
    return {
        face,
        suits,
        toString() {
   return `${face}${carSuits[suits]}`;
        } 
    }
  }else{
    throw new Error("Error")
  }
}
createCard('10', 'S');