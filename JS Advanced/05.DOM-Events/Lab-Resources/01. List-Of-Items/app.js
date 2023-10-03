function addItem() {
   const inputElementText =document.getElementById("newItemText");
   const newListItemEl = document.createElement('li');
  const newElementsTextContent =  newListItemEl.appendChild(document.createTextNode(inputElementText.value));
  newListItemEl.appendChild(newElementsTextContent);
   const listOfItems = document.getElementById("items");
   listOfItems.appendChild(newListItemEl)
   inputElementText.value = ''

}