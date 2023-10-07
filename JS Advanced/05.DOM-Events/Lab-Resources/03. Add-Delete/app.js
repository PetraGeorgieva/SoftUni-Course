function addItem() {
  let inputTextValue = document.getElementById("newItemText").value;
  let list = document.getElementById("items");
  if (inputTextValue.length === 0) {
    return;
  }
  let listItem = document.createElement("li");
  listItem.textContent = inputTextValue;
  let remove = document.createElement("a");
  remove.textContent = "[Delete]";

  listItem.appendChild(remove);
  remove.href = "#";
  
  remove.addEventListener("click", deleteItem);
  list.appendChild(listItem);

  function deleteItem(e) {
    let link = e.target; // <a>
    let li = link.parentElement // <li>
    li.remove();
  }
}