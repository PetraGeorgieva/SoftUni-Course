function schoolGrades(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!map.has(name)) {
            map.set(name, []);
        }
        for (const grade of grades)
            map.get(name).push(grade);
    }
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${avgGrade(kvp[1]).toFixed(2)}`);
        //TODO: Write a function – avgGrade() that gets an array of grades and returns the average grade
    }
    function avgGrade(array) {
        let resultGrades = array.map(x=>Number(x)).reduce((a,c) => a+=c,0)
        resultGrades = resultGrades/array.length
        return resultGrades;
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)