function smallestTwoNumbers(input) {
    input.sort((x,y) => x-y);
    let newArr = input.slice(0,2);
    // for (let i = 0; i < 2; i++) {
    //     let newElement = input.shift()
    //     newArr.push(newElement);
    // }

    return newArr.join(' ');
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));