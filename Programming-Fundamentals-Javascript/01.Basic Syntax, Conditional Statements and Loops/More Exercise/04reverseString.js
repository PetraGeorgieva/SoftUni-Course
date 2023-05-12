function reverseString(stringsreverse) {
    let division = stringsreverse.split("")
    let reversearray = division.reverse()
    let strings = reversearray.join("")
    console.log(strings)
}
reverseString("Hello")