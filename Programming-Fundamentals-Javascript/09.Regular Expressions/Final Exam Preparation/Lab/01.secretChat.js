function secretChat(params) {
    let concealedMessage = params.shift()
    let i = 0;
    while (params[i] !=='Reveal') {
        let instructuons = params[i].split(':|:')
        if(instructuons[0] === 'InsertSpace'){
        let index = Number(instructuons[1])
        let leftSide = concealedMessage.substring(0,index)
        let rightSide = concealedMessage.substring(index)
        concealedMessage = leftSide  + ' ' + rightSide
        console.log(concealedMessage)
        }else if (instructuons[0] === 'Reverse'){
         let substring = instructuons[1];
         if (concealedMessage.includes(substring)){
            let newSubstring = substring.split('').reverse().join('')
            concealedMessage = concealedMessage.replace(substring,'');
            concealedMessage+=newSubstring
            console.log(concealedMessage)
         }else{
            console.log('error')
         }
         
        } else if (instructuons[0] === 'ChangeAll'){
            let substring = instructuons[1]
            let replacement = instructuons[2]
            while (concealedMessage.includes(substring)){
              concealedMessage =  concealedMessage.replace(substring,replacement)
            }
         console.log(concealedMessage)
        }
        i++
    }
    console.log(`You have a new text message: ${concealedMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )