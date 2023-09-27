function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";
  const inputValue = document
    .getElementById("text")
    .value.toLocaleLowerCase();
  const currentCase = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  if (currentCase !== CAMEL_CASE && currentCase !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }
  const arr = inputValue.split(" ");
  let output = "";
  let startPoint = 0
  if (currentCase === CAMEL_CASE) {
    output += arr[0]
    startPoint = 1
  }
  for (let i = startPoint; i < arr.length; i++) {
    const word = arr[i]
    const initialLetter = word[0].toLocaleUpperCase();
    output += initialLetter + word.slice(1, word.length)
    result.textContent = output;
  }

}