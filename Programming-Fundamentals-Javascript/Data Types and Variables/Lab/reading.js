function reading (pagesOfBook,pagesReadPerHour,daysLeftForReading) {
let totalHoursNeededforReadingTheBook =  pagesOfBook / pagesReadPerHour;
let requaredDaysPerDay = totalHoursNeededforReadingTheBook / daysLeftForReading;
console.log(requaredDaysPerDay)
}
reading(212,
    20 ,
    2 
    );