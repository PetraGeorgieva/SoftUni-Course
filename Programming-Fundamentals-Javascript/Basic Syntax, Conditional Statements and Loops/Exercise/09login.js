function login (input){
    let index = 0
    let username = input[index]
    index++
    let passwords = input[index]
    let division = username.split("")
    let reversearray = division.reverse()
    let password = reversearray.join("")
    let counter = 0;
    while (passwords !== password){
        counter++
        if (counter === 4){
            console.log(`User ${username} blocked!`)
            return;
        }
        console.log(`Incorrect password. Try again.`)
        index++
        passwords = input[index]
    }
    console.log(`User ${username} logged in.`)
}
    login(['sunny','rainy','cloudy','sunny','not sunny']);