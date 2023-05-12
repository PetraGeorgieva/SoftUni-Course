function firstAndLastKNumber(arr) {
    let element = arr.shift();
    let newArr = arr.slice(0, element);
    console.log(newArr.join(' '));

    let secondNewArr = arr.slice(arr.length-element, arr.length);
    console.log(secondNewArr.join(' '));
}
firstAndLastKNumber([2, 7, 8, 9]);