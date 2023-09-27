function search() {
   const list = document.querySelectorAll("#towns li");
   const elementInput = document.getElementById("searchText").value;
   const result = document.getElementById("result");
   let sum = 0;
   for (const li of list) {
      const inputToLower = elementInput.toLowerCase();
      const liTextToLower = li.textContent.toLowerCase();
      if(liTextToLower.includes(inputToLower)){
         li.style.fontSize = "bold";
         li.style.textDecoration = "underline";
         sum++
      }else{
         li.style.fontSize = "";
         li.style.textDecoration = "";
         
      }
   }
   result.textContent = `${sum} matches found`
}
