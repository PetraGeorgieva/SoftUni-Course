function solve() {
  const [generateButton, buyButton] = document.querySelectorAll("button");
  const [incomeTextAria, resultTextAria] =
    document.querySelectorAll("textarea");
  let classTable = document.querySelector("tbody");

  generateButton.addEventListener("click", generateHandler);
  buyButton.addEventListener("click", buyHandler);

  function generateHandler(event) {
    if (!incomeTextAria.value) {
      return;
    }
    let value = JSON.parse(incomeTextAria.value);
    for (let el of value) {
      let tableToAttach = createTableData(el);
      classTable.appendChild(tableToAttach);
    }
  }
  function createTableData(data) {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = "<td>" +
    `<img src="${data.img}">`+
"</td>" +
"<td>" +
   `<p>${data.name}</p>`+
"</td>" +
"<td>" +
    `<p>${data.price}</p>`+
"</td>" +
"<td>" +
   `<p>${data.decFactor}</p>`+
"</td>" +
"<td>" +
    "<input type='checkbox'/>"+
"</td>"
  
    return tableRow;
  }

  function buyHandler(e) {
    let names = [];
    let totalPrice = 0;
    let avgFactor = 0;
    let selectCheckBox =Array.from(document.querySelectorAll("input[type=checkbox]")).filter(el => el.checked);

    selectCheckBox.forEach(el => {
      let [imgTD,nameTD,priceTD,decorFactorTD,markTD] = Array.from(el.parentElement.parentElement.children);
       names.push(nameTD.children[0].textContent);
       totalPrice+=Number(priceTD.children[0].textContent);
       avgFactor+=Number(decorFactorTD.children[0].textContent);

    })
    let res = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor/names.length}`
    res = res === "" ? "empty" : res;
    resultTextAria.value = res;
  }
}

