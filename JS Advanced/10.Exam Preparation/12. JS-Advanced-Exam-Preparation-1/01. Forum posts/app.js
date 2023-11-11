window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content");
  let list = document.getElementById("review-list");

  let buttonPublish = document.getElementById("publish-btn");
  let clearButton = document.getElementById("clear-btn");
  let listApproved = document.getElementById("published-list");

  buttonPublish.addEventListener("click", OnPublic);
  clearButton.addEventListener("click", cleanss);

  function cleanss () {

    let toRemove = Array.from(listApproved.children);
    toRemove.forEach(p=>p.remove())
  }

  function OnPublic() {
    
    if (title.value == "" || category.value == "" || content.value == "") {
      return;
    }
    let li = document.createElement("li");
    li.setAttribute("class", "rpost");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = title.value;
    let p1 = document.createElement("p");
    p1.textContent = `Category: ${category.value}`
    let p2 = document.createElement("p");
    p2.textContent = `Content: ${content.value}`

   

    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn","edit");
    editBtn.textContent = "Edit";
    
    let approveBtn = document.createElement("button");
    approveBtn.classList.add("action-btn","approve");
    approveBtn.textContent = "Approve";


    editBtn.addEventListener("click", edits);
    approveBtn.addEventListener("click", approved);

    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    list.appendChild(li);

    title.value = "";
    category.value = "";
    content.value = "";

  

    function edits(e) {
      let listToRemove = e.target.parentElement
      listToRemove.remove()

      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;
   
    }

   
    function approved(e) {
      let lists = e.target.parentElement
      lists.remove();

      let buttons = Array.from(lists.querySelectorAll('button'));
      buttons.forEach(btn=> btn.remove())

      listApproved.appendChild(lists);
     
    }
  }

}
