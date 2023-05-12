function ladyBugs(input) {
    // let field = [];
    let sizefield = Number(input[0]);
    /*for (let i = 0; i < sizefield; i++) {
        field[i] = 0
    }*/
    let field = new Array(sizefield).fill(0) // .fill(0) mette i 0 al posto di underfind
    let indexofLadyBugs = input[1].split(" ");
    for (let i = 0; i < indexofLadyBugs.length; i++) {
        let index = indexofLadyBugs[i];
        if (field[index] !== undefined) {
            field[index] = 1;
        }

    }
    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let indexladybug = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);
        if (indexladybug >= field.length || indexladybug < 0 || field[indexladybug] == 0) {
            continue;
        }
        field[indexladybug] = 0;
        let isFly = true
        while (isFly) {
            let currentIndex = direction === "right" ? indexladybug + flyLength : indexladybug - flyLength
            if (field[currentIndex] === 0) {
                field[currentIndex] = 1;
                isFly = false
            } else if (field[currentIndex] === 1) {
                flyLength += flyLength
            } else {
                isFly = false;
            }
        }
        /*if (direction === "right") {
            while (isFly) {
                if (field[indexladybug + flyLength] === 0) {
                    field[indexladybug + flyLength] = 1;
                    isFly = false;
                } else if (field[flyLength] === 1) {
                    flyLength += flyLength
                } else {
                    isFly = false;
                }
            }
        } else {
            while (isFly) {
                if (field[indexladybug - flyLength] === 0) {
                    field[indexladybug - flyLength] = 1;
                    isFly = false;
                } else if (field[flyLength] === 1) {
                    flyLength += flyLength
                } else {
                    isFly = false
                }
                
            }
         } */

    }
    console.log(field.join(" "))
}
ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']
)