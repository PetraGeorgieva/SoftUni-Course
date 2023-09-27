function generateReport() {
    
    const outputResult =  document.querySelector("#output");
    const result = [];
    const  checks= Array.from(document.querySelectorAll("thead tr th input"));
    const  trs= Array.from(document.querySelectorAll("tbody tr"));

    trs.forEach(row => {
        const current = {}
        Array.from(row.querySelectorAll("td")).forEach((x,index)=>{
            if(checks[index].checked){
                current[checks[index].name]=x.textContent
            }
        })
        result.push(current)
    });
   outputResult.value= JSON.stringify(result);
}