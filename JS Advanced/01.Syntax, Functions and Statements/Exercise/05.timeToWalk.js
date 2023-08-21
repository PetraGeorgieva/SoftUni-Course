function timeToWalk(steps,stepLength,speed){
    let totalLengthinMeters = steps * stepLength;
    let totalPause = Math.trunc(totalLengthinMeters/500)
    let totalLengthKm = totalLengthinMeters/1000;
    let kmInMinutes = speed/60;
    let times = totalLengthKm / kmInMinutes
    let totalTimes = times+=totalPause
    let second = Math.round((totalTimes-Math.trunc(totalTimes))*60)
    let hours = Math.trunc(totalTimes/60)
    let minutes = Math.trunc(totalTimes)
  
    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + (minutes) + ":" + (second < 10 ? "0" : "") + second);
}
timeToWalk(4000, 0.60, 5)