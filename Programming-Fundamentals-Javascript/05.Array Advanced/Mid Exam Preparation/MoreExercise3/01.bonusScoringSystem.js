function bonusStdScore(array) {
    let countOfLecturs = Number(array[1]);
    let aditionalBonus = Number(array[2]);
    let maxStudentLectors = 0;
    let maxBonus = 0;
 
    for (let i = 3; i < array.length; i++) {
        let firstStudentLecturs = Number(array[i]);
        if (firstStudentLecturs > maxStudentLectors) {
            maxStudentLectors = firstStudentLecturs;
            maxBonus = (maxStudentLectors / countOfLecturs * (5 + aditionalBonus));
        }
    }
    
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`)
    console.log(`The student has attended ${maxStudentLectors} lectures.`)
}
bonusStdScore( [1, 0, 0, 0]
)

