function solve() {
    const forRef = document.querySelector("form");
    const taskRef = document.getElementById("task");
    const taskDesc = document.getElementById("description");
    const dateRef = document.getElementById("date");
    const sectionsRef = document.querySelectorAll("section");
    const openRef = sectionsRef[1];
    const inProgress = sectionsRef[2];
    const complete = sectionsRef[3];
    forRef.addEventListener("submit", onSubmit);
    function onSubmit(e) {
        e.preventDefault();
        const taskValue = taskRef.value;
        const taskDescValue = taskDesc.value;
        const dateValue = dateRef.value;
        if(!taskValue || !taskDescValue || !dateValue){
            return;
        }
        let myArticle = createArticle(taskValue,taskDescValue,dateValue);
        openRef.children[1].appendChild(myArticle);
        taskRef.value = '';
        taskDesc.value = '';
        dateRef.value = '';
    }

    function createArticle(name,desc,date) {
        let article = document.createElement("article");
        article.innerHTML = `
        <h3>${name}</h3>
        <p>Description: ${desc}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
          <button class="green">Start</button>
          <button class="red">Delete</button>
        </div>
        `;

        let buttons = article.querySelectorAll("button");
        let startButton = buttons[0];
        let stopButton = buttons[1];
        startButton.addEventListener("click",moveArticle)
       stopButton.addEventListener("click",onDelete)
        return article;
    }
    function moveArticle(event) {
        const article = event.target.parentElement.parentElement;
        let btns = article.querySelectorAll("button");
        let deleteBtn = btns[0];
        let finishBtn = btns[1];

       deleteBtn.removeEventListener("click",moveArticle);
       deleteBtn.addEventListener("click",onDelete);
       
       deleteBtn.classList.remove("green")
       deleteBtn.classList.add("red")
       deleteBtn.textContent = "Delete";

       finishBtn.removeEventListener("click",onDelete);
       finishBtn.addEventListener("click",onFinish);
           
       finishBtn.classList.remove("red");
       finishBtn.classList.add("orange");
       finishBtn.textContent = "Finish";


       inProgress.children[1].appendChild(article)
    }
        function onFinish(event) {
        const article = event.target.parentElement.parentElement;
        event.target.parentElement.remove()
        complete.children[1].appendChild(article)
    }
    function onDelete(event) {
        event.target.parentElement.parentElement.remove();
    }
}