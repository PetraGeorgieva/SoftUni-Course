function cats(params) {
    let cats = []
    class cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for (let i = 0; i < params.length; i++) {
        let [name, age] = params[i].split(' ')
        cats.push(new cat(name, age));
    }
    
    for (let cat of cats) {
        cat.meow()
    }


}
cats(['Mellow 2', 'Tom 5'])