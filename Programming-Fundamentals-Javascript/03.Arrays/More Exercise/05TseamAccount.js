function tseamAccount(input) {
    let account = input.shift()
    let newArray = account.split(' ')
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");
        let command = commands[0];
        let nameOftheGame = commands[1];
        let index = newArray.indexOf(nameOftheGame)
        switch (command) {
            case "Install":
                if (!newArray.includes(nameOftheGame)) {
                    newArray.push(nameOftheGame)
                }
                break;
            case "Uninstall":
                if (newArray.includes(nameOftheGame)) {
                    newArray.splice(index, 1) // at the index position of the game remove 1 element 
                }
                break;
            case "Update":
                if (newArray.includes(nameOftheGame)) {
                    newArray.splice(index, 1)
                    newArray.push(nameOftheGame)
                }
                break;

            case "Expansion":
                let gameAndexpansion = nameOftheGame.split('-');
                let newGame = gameAndexpansion[0];
                let expansion = gameAndexpansion[1]
                index = newArray.indexOf(newGame)  
                if (newArray.includes(newGame)) {
                    newArray.splice(index + 1, 0, `${newGame}:${expansion}`) // at the position of the game add without eliminate any elemnt the new game.
                }
                break;
            case "Play!":
                console.log(newArray.join(' '));
                return;

        }
    }
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']


)