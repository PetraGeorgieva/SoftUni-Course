function validate() {
    let inputValue =  document.getElementById("email");
    inputValue.addEventListener("change",eventHandler)

    function eventHandler(e) {
        const {target} = e;
        let regex = /[a-z]+\@[a-z]+\.[a-z]+/gm;
        const operation = regex.test(inputValue.value) ? "remove" : "add";
        target.classList[operation]("error");
      
    }

    
}