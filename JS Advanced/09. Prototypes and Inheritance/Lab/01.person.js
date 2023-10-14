function createPerson(firstName,lastName) {
     return {
        firstName,
        lastName,
        get fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        set fullName(string){
            let [name,lname] = string.split(' ');
            this.firstName = name;
            this.lastName = lname;
            
        }
     }
}



let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
