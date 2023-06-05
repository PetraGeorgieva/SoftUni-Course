function flightSchedule(array){
    let  flight = array.shift()
    let  flightStatus =  array.shift()
    let  statusToCheck = array.shift()
    let obj = {}
 for (let i = 0; i < flight.length; i++) {
   let [flightName,destination] = flight[i].split(' ');
   obj[flightName] = {
    Destination: destination,
    Status: `Ready to fly`
   }
 }
  for (let j = 0; j < flightStatus.length; j++) {
   let [flightName , status]  =flightStatus[j].split(' ');
   if(obj.hasOwnProperty(flightName)) {
    obj[flightName].Status = status;
   }
  }
  for(let key of Object.keys(obj)){
    if (obj[key].Status === String(statusToCheck[0])) {
        console.log(obj[key]);
    }
    
  }
}
flightSchedule([["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],["Ready to fly"]]
)