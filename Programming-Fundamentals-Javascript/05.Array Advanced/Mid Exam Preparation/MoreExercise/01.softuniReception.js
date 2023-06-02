function softuni(params) {
    let employees = params.splice(0,3).map(x=>Number(x));
    let studenst = params.splice(0,1).map(x=>Number(x));
    let studentsperHour = 0
    let timer = 0;
    for (let i = 0; i < employees.length; i++) {
       studentsperHour+=employees[i]   
    }
    while (studenst > 0){
        timer++
        studenst-=studentsperHour;
        if(counter % 4 === 0){
            studenst+=studentsperHour;
        }
    }
    console.log(`Time needed: ${timer}h."`)
}
softuni(['3','2','5','40'])