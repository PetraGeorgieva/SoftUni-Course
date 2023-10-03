function filterEmployees(data,criteria) {
    let JSONparse = JSON.parse(data);
    let [type,example] = criteria.split('-');
    let count = -1;
    for (const obj of JSONparse) {
        if(type == 'all') {
            count++
            console.log(`${count}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        }
       if( obj.hasOwnProperty(type)){
       if( obj[type] === example){
          count++
        console.log(`${count}. ${obj.first_name} ${obj.last_name} - ${obj.email}`)
       }
        
       }
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all'
)