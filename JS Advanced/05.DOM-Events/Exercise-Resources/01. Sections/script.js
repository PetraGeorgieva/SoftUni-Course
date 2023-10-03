function create(words) {
  let list = document.querySelector("#content")
  words.forEach(element => {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p")
    newP.textContent = element;
    newP.style.display="none"
    newDiv.appendChild(newP);
    newDiv.addEventListener("click", show)
    list.appendChild(newDiv)
  });
  
  function show(e) {
    let p = e.target
    p.querySelector("p").style.display = "block"
  }
}