let createBtn =  document.getElementById('create-btn');
createBtn.addEventListener('click',createHandler)

let btnLoad = document.getElementById('load-btn');
btnLoad.addEventListener('click',loadLandmarks);

let labdmarksTableBody = document.querySelector('#landmarks-table tbody')

async function  loadLandmarks(){
[...labdmarksTableBody.children].forEach(c=>c-remove())
  let url = `http://localhost:3030/jsonstore/landmarks`
  let response = await fetch(url)
  let data =  response.json()
  console.log(data);
  Object.values(data).forEach(el=>{
      let tr =  createDOM(el.name,el.area,el.dataStart,el.dataEnd);
      labdmarksTableBody.appendChild(tr)
  })
}
 
function createDOM(name,area,dataStart,dataEnd){
   let tr =  document.createElement('tr')

   let td1 =  document.createElement('td')
   td1.textContent = name
   let td2 =  document.createElement('td')
   td2.textContent = area
   let td3 =  document.createElement('td')
   td3.textContent = dataStart
   let td4 =  document.createElement('td')
   td4.textContent = dataEnd
   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)

}

async function createHandler(e) {
    e.preventDefault();

    let name = document.getElementById('create-name').value
    let area = document.getElementById('create-area').value
    let yearDatedStart = Number(document.getElementById('create-year-dated-start').value);
    let yearDatedEnd = Number(document.getElementById('create-year-dated-end').value);
    let url = `http://localhost:3030/jsonstore/landmarks`
    let settings = {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(name,area,yearDatedStart,yearDatedEnd)
    }
    let response = await fetch(url,settings)
    let data =  response.json();
    console.log(data);
}