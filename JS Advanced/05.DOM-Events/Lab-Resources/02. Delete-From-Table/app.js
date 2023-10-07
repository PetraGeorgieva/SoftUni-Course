function deleteByEmail() {

 let table = Array.from( document.querySelectorAll("#customers tbody tr td"));
 let result = document.getElementById("result");
 let inputValue =  document.querySelector('input').value;
 for (let i = 0; i< table.length; i++) {
  if(!i%2 == 0){
    if(table[i].textContent =  inputValue){
      table[i].remove();
      table[i-1].remove();
      result.textContent = "Deleted.";

    }
  }
 }
 result.textContent = "Not found.";
}