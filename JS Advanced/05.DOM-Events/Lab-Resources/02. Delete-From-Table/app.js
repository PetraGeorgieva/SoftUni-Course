function deleteByEmail() {
let inputEmail = document.getElementsByName('email')[0].value;
  let tableSecondCOlumn = document.querySelectorAll("#customers tr td:nth-child(2)");
  for (const td of tableSecondCOlumn) {
    if(td.textContent === inputEmail){
        let row = td.parentNode;
        row.parentNode.removeChild(row);
        document.getElementById("result").textContent = 'Deleted';
        return;
    }
    document.getElementById("result").textContent = 'Not found.';

  }
}