async function getInfo() {
    let input =  document.getElementById('stopId');
    let inputValue = input.value;
    let divText = document.getElementById('stopName')
    let result =  document.getElementById('buses');
    result.innerHTML = '';
try{
const response =  await fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputValue}`);
const data =  await response.json();
    divText.textContent = data.name;
    let array =  Object.entries(data.buses)
    array.forEach(element => {
        let li  = document.createElement('li');
        li.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`
        result.appendChild(li)
    });
}catch(err){
   divText.textContent = 'Error'
}

}