function solve(years,mount,day){
    mount-=1
    let today= new Date(years,mount,day);
    
    let nextDay = new Date(today)
    nextDay.setDate(today.getDate() + 1);
    let dd = nextDay.getDate()
    let mm = nextDay.getMonth() +1;
    let yyyy = nextDay.getFullYear();
  
   nextDay = `${yyyy}-${mm}-${dd}`

    console.log(nextDay);
   
}  solve(2016,
    2,
    28)