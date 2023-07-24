function passwordReset(params) {
    let password = params.shift()
    let i = 0;
    while (params[i] != 'Done') {
        let commands = params[i].split(' ');
        switch (commands[0]) {
            case 'TakeOdd':  
             let result = ''
            for (let j = 0; j < password.length; j++) {
                if (j % 2 != 0) {
                    result += password[j]
                }
            }
            password = result;
            console.log(password)
                break;
            case 'Cut': 
            let index = Number(commands[1]);
            let length = Number(commands[2]);
            let sub = password.substring(index, index += length);
            password = password.replace(sub, '');
            console.log(password)
                break;
            case 'Substitute': 
            let substr = commands[1];
            let substitute = commands[2]
            if (password.includes(substr)) {
                while (password.includes(substr)) {
                    password = password.replace(substr, substitute)
                }
                console.log(password)
            } else {
                console.log('Nothing to replace!');
            }
            break;
        }
    i++

    }
    console.log(`Your password is: ${password}`)
    }
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
