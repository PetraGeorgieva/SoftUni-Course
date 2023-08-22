function sumFirstLast(params) {
    let firsElement =  Number(params.shift());
    let lastElement = Number(params.pop());
    let result = firsElement+lastElement;
    return result;
}
sumFirstLast(['20', '30', '40'])