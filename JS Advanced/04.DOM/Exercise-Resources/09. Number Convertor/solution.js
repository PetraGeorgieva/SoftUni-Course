function solve() {
  let result = document.getElementById("result").value;
  let inputNumber = document.getElementById("input").value;
  let arr = Array.from(document.querySelectorAll("#selectMenuTo option"))
  arr.forEach(element => {
    element.value = 'boh'
    element.appendChild('option')
  });
}
