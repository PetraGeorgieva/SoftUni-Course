function theImitationGame(params) {
    let string = params.shift()
    let i = 0;
    while(params[i] !== 'Decode'){
        let commands = params[i].split('|')
        switch (commands[0]) {
            case 'Move': string = move(string,Number(commands[1]))
                break;
            case 'Insert': string = insert(string,Number(commands[1]),commands[2])
                break;
            case 'ChangeAll': string = change(string,commands[1],commands[2])
                break;
        }
        i++
    }
    function move(text,n){
        let letters = text.substring(0,n)
        text = text.replace(letters,'')
        text+=letters
        return text;
    }
    function insert(text,index,value){
    let leftText = text.substring(0,index)
    let rightText =  text.substring(index)
    text = leftText + value + rightText
    return text;
    }
    function change(text,substring,replacement){
        while(text.includes(substring)){
           text = text.replace(substring,replacement)
        }
        return text;
    }
    console.log(`The decrypted message is: ${string}`)
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  
  )