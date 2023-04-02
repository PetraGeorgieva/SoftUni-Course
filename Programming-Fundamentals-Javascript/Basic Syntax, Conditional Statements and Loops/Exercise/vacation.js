function vacation (groupofpeople,typeofthegroup,dayoftheweekend){
   // let groupofpeople = Number(input[0]);
   // let typeofthegroup = input[1];
   // let dayoftheweekend = input[2];
    let totalPrice = 0;
     switch (typeofthegroup) {
        case "Students":
            switch (dayoftheweekend){
                    case "Friday":
                          totalPrice = groupofpeople * 8.45
                        if ( groupofpeople >= 30){
                           totalPrice*=0.85
                        } 
                        break;
                    case "Saturday":
                            totalPrice = groupofpeople * 9.80
                          if ( groupofpeople >= 30){
                             totalPrice*=0.85
                          } 
                          break;
                    case "Sunday":
                            totalPrice = groupofpeople * 10.46
                          if ( groupofpeople >= 30){
                             totalPrice*=0.85
                          } 
                          break;
            }
            break;
            case "Business":
                switch (dayoftheweekend){
                        case "Friday":
                              totalPrice = groupofpeople * 10.90
                            if ( groupofpeople > 100){
                               groupofpeople-=10
                               totalPrice = groupofpeople * 10.90
                            } 
                            break;
                        case "Saturday":
                                totalPrice = groupofpeople * 15.60
                                if ( groupofpeople > 100){
                                    groupofpeople-=10
                                    totalPrice = groupofpeople * 15.60
                                 }  
                              break;
                        case "Sunday":
                                totalPrice = groupofpeople * 16
                                if ( groupofpeople > 100){
                                    groupofpeople-=10
                                    totalPrice = groupofpeople * 16
                                 }  
                              break;
                }
                break;
                case "Regular":
                    switch (dayoftheweekend){
                            case "Friday":
                                  totalPrice = groupofpeople * 15
                                if ( groupofpeople >= 10 && groupofpeople <= 20){
                                   totalPrice*=0.95
                                } 
                                break;
                            case "Saturday":
                                    totalPrice = groupofpeople * 20
                                    if ( groupofpeople >= 10 && groupofpeople <= 20){
                                        totalPrice*=0.95
                                     }  
                                  break;
                            case "Sunday":
                                    totalPrice = groupofpeople * 22.50
                                    if ( groupofpeople >= 10 && groupofpeople <= 20){
                                        totalPrice*=0.95
                                     } 
                                  break;
                    }
                    break;
     }
      console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30,
    "Students",
    "Sunday"
     )