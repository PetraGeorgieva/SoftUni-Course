function formatGrade(grades) {
    let gradesText = ""
    if(grades < 3.00  ){
   gradesText = "Fail";
    } else if (grades < 3.5){
        gradesText = "Poor";
    } else if (grades < 4.5){
        gradesText = "Good";
    } else if (grades < 5.5){
        gradesText = 'Very good';
    } else if (grades <= 6){
        gradesText = 'Excellent';
    }
    let gradeValueText = grades < 3 ? '2': grades.toFixed(2);
    return `${gradesText} (${gradeValueText})`
}
console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));