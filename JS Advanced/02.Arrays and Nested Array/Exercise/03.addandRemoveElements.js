function addandRemoveElements(input) {
    let arr = []
    let number = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i]
        number++
        if(command === 'add'){
            arr.push(number)
        }else if (command === 'remove') {
           arr.pop()
        }
    }
    if(arr.length <=0){
        console.log('Empty')
    }else{
        console.log(arr.join('\n'))
    }
}
addandRemoveElements(	['add', 
'add', 
'add', 
'add']


)