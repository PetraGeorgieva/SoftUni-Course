function solve() {
  let result = document.getElementById("result");
  let inputNumber = document.getElementById("input");
  let selectMenu = document.querySelector("#selectMenuTo");
  let btn = document.querySelector("button");
  btn.addEventListener("click", convertIt);

  let firstChild = selectMenu.children[0];
  firstChild.textContent = "Hexadecimal";
  firstChild.value = "hexadecimal";
  let option = firstChild.cloneNode(true);
  option.textContent = "Binary";
  option.value = "binary";
  selectMenu.appendChild(option);

  function convertIt(e) {
    if (selectMenu.value === "binary") {
      digit = Number(inputNumber.value);
      let resultString = "";
      while (digit > 0) {
        let remainder = digit % 2;
        resultString += remainder;
        digit = Math.trunc(digit / 2);
      }
     resultString =  resultString.split("")
     .reverse()
     .join("")
      result.value = resultString;
    } else if (selectMenu.value === "hexadecimal") {
      digit = Number(inputNumber.value);
      let resultString = "";
      resultString = digit.toString(16)
      resultString = resultString.toUpperCase()
      result.value = resultString;
    }
  }
}
