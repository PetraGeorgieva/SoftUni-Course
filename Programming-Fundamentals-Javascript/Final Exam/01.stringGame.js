function stringGame(params) {
    let string =  params.shift();
    let i = 0;
    while(params[i] != 'Done'){
        let commands = params[i].split(' ');
        if (commands[0] === 'Change'){
          while(string.includes(commands[1])){
            string = string.replace(commands[1],commands[2])
          }
          console.log(string);
        }else if (commands[0] === 'Includes'){
            if(string.includes(commands[1])){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(commands[0] === 'End'){
            if(string.endsWith(commands[1])){
               console.log('True')
            }else{
                console.log('False')
            }

        }else if (commands[0] === 'Uppercase'){
            string = string.toUpperCase()
            console.log(string)

        }else if (commands[0] === 'FindIndex'){
            let index =  string.indexOf(commands[1])
             console.log(index)
        }else if (commands[0] === 'Cut'){
           let  intialIndex = Number(commands[1]);
           let count = Number(commands[2])
           let subString = string.substring(intialIndex,count+=intialIndex);
           let cutChar = string.replace(subString,'');
           console.log(subString)
           string = cutChar
           }
           i++
        }
    }
stringGame(["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"])