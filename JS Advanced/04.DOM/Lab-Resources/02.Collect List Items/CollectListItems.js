function extractText() {
   let list = document.getElementsByTagName("li");
   let textAria = document.querySelector("#result");
   for (let node of list) {
    textAria.value+=node.textContent + "\n"
   }
}