function road(km,type) {
    let speedLimit = 0;
    let status = ''
    let difference = 0
    let sum = 0;
  switch (type){
    case 'motorway':
        speedLimit = 130
        difference = km-speedLimit
        if(km <= speedLimit){
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`)
        }else {
            if (difference <= 20){
               status = 'speeding';
            } else if (difference > 20 && difference <= 40){
                status = 'excessive speeding';
            }else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
        break;
    case 'interstate':
        speedLimit = 90
        difference = km-speedLimit
        if(km <= speedLimit){
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`)
        }else {
            if (difference <= 20){
               status = 'speeding';
            } else if (difference > 20 && difference <= 40){
                status = 'excessive speeding';
            }else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
        break;
    case 'city':
        speedLimit = 50
        difference = km-speedLimit
        if(km <= speedLimit){
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`)
        }else {
            if (difference <= 20){
               status = 'speeding';
            } else if (difference > 20 && difference <= 40){
                status = 'excessive speeding';
            }else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
       break;
    case 'residential':
        speedLimit = 20
        difference = km-speedLimit
        if(km <= speedLimit){
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`)
        }else {
            if (difference <= 20){
               status = 'speeding';
            } else if (difference > 20 && difference <= 40){
                status = 'excessive speeding';
            }else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        }
        break;
  }
}
road(21, 'residential')