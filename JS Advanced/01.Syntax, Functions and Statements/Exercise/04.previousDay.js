function previousDay(years,month,day) {
   let date =  new Date(years,month-1,day)
   date.setDate(date.getDate() - 1);
   console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}
previousDay(2016,9,1);