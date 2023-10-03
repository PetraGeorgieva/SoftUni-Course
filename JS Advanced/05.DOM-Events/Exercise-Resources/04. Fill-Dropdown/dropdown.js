function addItem() {
let textInput =  document.getElementById("newItemText").value
let valueInput =  document.getElementById("newItemValue").value
let select = document.getElementById("menu");
let newElement = document.createElement('option')
newElement.value = valueInput;
newElement.textContent = textInput;
select.appendChild(newElement);
document.getElementById("newItemText").value = "";
document.getElementById("newItemValue").value = "";
}
