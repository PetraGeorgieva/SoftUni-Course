function buildAWall(array) {

    let cubicYardinPesos = 1900;
    let cubicforDay = 195;
    let result = 0;
    let secondresult = 0;
    let newArray = []

    params = array.filter((x) => x < 30 && x >= 0);

    while (params.length != 0) {
        params = params.map((x) => x + 1)
        result = params.length * cubicforDay;
        newArray.push(result);
        result = 0;

        params = params.filter((x) => x < 30)
    }

    console.log(newArray.join(', '));

    for (let num of newArray) {
        secondresult += num
    }
    let sum = secondresult * cubicYardinPesos
    console.log(`${sum} pesos`);
}
buildAWall([17,
    22,
    17,
    19,
    17]);