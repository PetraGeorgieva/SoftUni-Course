function solve() {
  const inputValue = document.getElementById("input")
  .value.split('.')
  .filter(s=> s!== "")
  .map(s=> s+=".");
  const result = document.getElementById("output");
  const paragraphRoof = Math.ceil(inputValue.length/3);
 for (let i = 0; i < paragraphRoof; i++) {
    const joinedSentances = inputValue.splice(0,3).join('');
    result.innerHTML += `<p>${joinedSentances}</p>`;
 }
  }
