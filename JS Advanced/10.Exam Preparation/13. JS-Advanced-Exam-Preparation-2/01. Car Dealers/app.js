window.addEventListener("load", solve);

function solve() {
  
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");

  let tableBody = document.getElementById("table-body");
  let list =  document.getElementById("cars-list");
  let profit = document.getElementById("profit");

  let button = document.getElementById("publish");
  button.addEventListener("click", addCar);

  function addCar(e) {
    e.preventDefault()
    if (
      make.value == "" ||
      model.value == "" ||
      year.value == "" ||
      fuel.value == "" ||
      originalCost.value == "" ||
      sellingPrice.value == ""
    ) {
      return;
    }
    if (Number(originalCost.value) > Number(sellingPrice.value)) {
      return;
    }

    
  
  let makeValue = make.value;
  let modelValue = model.value;
  let yearValue = year.value;
  let fuelValue = fuel.value;
  let originalCostValue = originalCost.value;
  let sellingPriceValue = sellingPrice.value;

    let tr = document.createElement("tr");
    tr.setAttribute("class", "row");

    let td1 = document.createElement("td");
    td1.textContent = make.value;

    let td2 = document.createElement("td");
    td2.textContent = model.value;

    let td3 = document.createElement("td");
    td3.textContent = year.value;

    let td4 = document.createElement("td");
    td4.textContent = fuel.value;

    let td5 = document.createElement("td");
    td5.textContent = originalCost.value;

    let td6 = document.createElement("td");
    td6.textContent = sellingPrice.value;

    let tdButtons = document.createElement("td");

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.setAttribute("class", "action-btn edit");

    let btnSell = document.createElement("button");
    btnSell.textContent = "Sell";
    btnSell.setAttribute("class", "action-btn sell");

    
    tdButtons.appendChild(btnEdit);
    tdButtons.appendChild(btnSell);
   
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(tdButtons);

    tableBody.appendChild(tr);

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    btnEdit.addEventListener("click", editInfo);
    btnSell.addEventListener("click", sellCar);

    
    function editInfo() {
      tableBody.removeChild(tr)

      make.value = makeValue 
      model.value = modelValue 
      year.value = yearValue 
      fuel.value = fuelValue
      originalCost.value = originalCostValue 
      sellingPrice.value = sellingPriceValue 
      
    }

  function sellCar(e) {
    e.preventDefault()

    let li = document.createElement('li');
    li.setAttribute('class','each-list')
    let spam1 = document.createElement('span');
    spam1.textContent = `${makeValue} ${modelValue}`
    let spam2 = document.createElement('span');
    spam2.textContent = `${yearValue}`
    let spam3 = document.createElement('span');
    let difference = Number(sellingPriceValue) - Number(originalCostValue)
    spam3.textContent = `${difference}`

    li.appendChild(spam1)
    li.appendChild(spam2)
    li.appendChild(spam3)

    list.appendChild(li)

    tr.remove()

    profit.textContent = Number(profit.textContent )+(Number(sellingPriceValue) - Number(originalCostValue)).toFixed(2)
  }

  }
}
