function employees(params) {
    let newArr = []
    class employeeses {
        constructor(names, personalNumbers) {
            this.names = names,
                this.personalNumbers = personalNumbers
        }
    solve(){
        console.log(`Name: ${this.names} -- Personal Number: ${this.personalNumbers}`);
    }
    }
    for (let i = 0; i < params.length; i++) {
        let names = params[i];
        let personalNumbers = names.length
        newArr.push(new employeeses(names, personalNumbers));
    }
    for (let employeeses of newArr) {
        employeeses.solve()
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)