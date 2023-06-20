function adressBook(params) {
   let assArr = {}
   params.forEach(element => {
    let [name,address] = element.split(':')
    assArr[name] = address
   });
   let sorted = Object.entries(assArr)
   sorted.sort((a,b) => a[0].localeCompare(b[0]));
 //  for (let i = 0; i < sorted.length; i++) {
 //   console.log(`${sorted[i][0]} -> ${sorted[i][1]}`)
 //  }
   for(let [key,values] of sorted) {
      console.log(`${key} -> ${values}`)
   }
   
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)