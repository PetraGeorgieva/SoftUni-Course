function toggle() {
   const MORE = "More";
   const LESS = "Less";
   const button = document.getElementsByClassName("button")[0];
   const divWrapperText = document.getElementById("extra"); 
   button.textContent = button.textContent === MORE ? LESS : MORE;
   divWrapperText.style.display = divWrapperText.style.display === "none" || divWrapperText.style.display === ""
   ? 'block'
   : "none"

}