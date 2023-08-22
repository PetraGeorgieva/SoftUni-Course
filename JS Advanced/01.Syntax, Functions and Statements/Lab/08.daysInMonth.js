function daysInMonth(month,years) {
    let date = new Date(years,month,0)
    console.log(date.getDate())
}
daysInMonth(1,2012)