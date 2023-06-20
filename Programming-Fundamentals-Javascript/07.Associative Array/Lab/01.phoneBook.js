function phoneBook(params) {
    let assArr ={}
    for (let i = 0; i < params.length; i++) {
        let [name,number] = params[i].split(' ');
        assArr[name] = number
    }
    for (let name in assArr) {
   console.log(`${name} -> ${assArr[name]}`)
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)