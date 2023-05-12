function passwordValidator(password) {
    let counter = 0;
    let isValid = true
    let lettersAndDigits = ''
    for (let i = 0; i < password.length; i++) {
        lettersAndDigits = fromcharToNumber(password[i]);
        if (lettersAndDigits < 48 || lettersAndDigits > 58 && lettersAndDigits < 65 || lettersAndDigits > 90 && lettersAndDigits < 97 || lettersAndDigits > 122) {
            isValid = false
        }
        if (lettersAndDigits >= 48 && lettersAndDigits <= 58) {
            counter++
        }

    }
    function fromcharToNumber(char) {
        return char.charCodeAt(0);
    }

    if (password.length < 6 || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isValid === false) {
        console.log('Password must consist only of letters and digits');
    }
    if (counter < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (password.length >= 6 && password.length <= 10 && isValid === true && counter >= 2) {
        console.log('Password is valid');
    }
}
passwordValidator('logIn');
console.log('--------');
passwordValidator('MyPass123');
console.log('--------');
passwordValidator('Pa$s$s');

//asci //48-58
// 65 -90  // 97-122