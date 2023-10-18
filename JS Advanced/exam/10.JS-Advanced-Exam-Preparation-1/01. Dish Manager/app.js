window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const gender = document.getElementById("genderSelect");
  const dishDescription = document.getElementById("task");
  const messagesSpan = document.getElementById("progress-count");
  let counter = 0;

  let ulIdfinished = document.getElementById("finished");
  let ulIdInProgress = document.getElementById("in-progress");
  let buttonSubmit = document.getElementById("form-btn");
  let btnClear = document.getElementById("clear-btn");

  buttonSubmit.addEventListener("click", addInformation);

  function addInformation() {
    if (
      firstName.value == "" ||
      lastName.value == "" ||
      age.value === "" ||
      dishDescription.value == ""
    ) {
      return;
    }

    let list = document.createElement("li");
    list.className = "each-line";
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${firstName.value} ${lastName.value}`;
    let p1 = document.createElement("p");
    p1.textContent = `${gender.value}, ${age.value}`;
    let p2 = document.createElement("p");
    p2.textContent = `Dish description: ${dishDescription.value}`
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    list.appendChild(article);
    ulIdInProgress.appendChild(list);
    let btnEdit = document.createElement("button");
    btnEdit.className = "edit-btn";
    btnEdit.textContent = "Edit";
    let btncomplete = document.createElement("button");
    btncomplete.className = "complete-btn";
    btncomplete.textContent = "Mark as complete";
    list.appendChild(btnEdit);
    list.appendChild(btncomplete);
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    dishDescription.value = "";
    let message = Number(messagesSpan.textContent);
    message++;
    messagesSpan.textContent = message;
    btnEdit.addEventListener("click", edits);
    btncomplete.addEventListener("click", completeIt);

    function edits() {
      let head4 = document.querySelector(".each-line article h4")
      let paragrafs = document.querySelectorAll(".each-line article p")
      let frName = head4.textContent.split(" ");
      let mOrF = paragrafs[0].textContent.split(", ");
      firstName.value = `${frName[0]}`;
      lastName.value = `${frName[1]}`;
      age.value = `${mOrF[1]}`;
      gender.value = `${mOrF[0]}`;
      dishDescription.value = paragrafs[1].textContent.replace('Dish description: ','')
      let lists = document.querySelector(".each-line");
      ulIdInProgress.removeChild(lists);
      let message = Number(messagesSpan.textContent);
      message--;
      messagesSpan.textContent = message;
    }
    function completeIt() {
      let lists = document.querySelector(".each-line");
      ulIdInProgress.removeChild(lists);
      let listsArticle = lists.children[0];
      let list = document.createElement("li");
      list.className = "each-line";
      list.appendChild(listsArticle);
      ulIdfinished.appendChild(list);

      let message = Number(messagesSpan.textContent);
      message--;
      messagesSpan.textContent = message;

      btnClear.addEventListener("click", function () {
        ulIdfinished.innerHTML = "";
      });
    }
  }
}
