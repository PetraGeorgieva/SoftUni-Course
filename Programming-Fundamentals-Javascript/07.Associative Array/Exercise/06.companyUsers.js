function companyUsers(params) {
    let company = new Map();
    for (let line of params) {
        let [companyName,id] = line.split(' -> ');
      if(!company.has(companyName)){
        company.set(companyName,new Set())
      }

        company.get(companyName).add(id)
    }
    let companyArr = [...company.entries()].sort((a,b) => (a[0]).localeCompare(b[0]));
    for (let namesCompany of companyArr) {
        console.log(`${namesCompany[0]}`)
        for (let users of namesCompany[1]) {
            console.log(`-- ${users}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )