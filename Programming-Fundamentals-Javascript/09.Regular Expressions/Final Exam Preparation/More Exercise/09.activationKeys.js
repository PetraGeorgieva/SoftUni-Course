function activationKeys(params) {
    let string = params.shift()
    let i = 0;
    while(params[i] != 'Generate'){
        let commands =  params[i].split('>>>')
        if(commands[0]=== 'Contains'){
            if(string.includes(commands[1])){
              console.log(`${string} contains ${commands[1]}`)
            }else{
                console.log('Substring not found!')
            }
        }else if (commands[0] === 'Flip'){
            if(commands[1] === 'Upper'){
                let text = string.substring(Number(commands[2]),Number(commands[3]))
               let  textUpper = text.toUpperCase()
                string = string.replace(text,textUpper)
                console.log(string);
            }else if(commands[1] === 'Lower'){
                let text = string.substring(Number(commands[2]),Number(commands[3]))
                let  textLower = text.toLowerCase()
                string = string.replace(text,textLower)
                console.log(string);
            }
        } else if (commands[0] === 'Slice'){
            let text = string.slice(Number(commands[1]),Number(commands[2]));
            string = string.replace(text,'')
            console.log(string)
        }
        i++
    }
        console.log(`Your activation key is: ${string}`)
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);