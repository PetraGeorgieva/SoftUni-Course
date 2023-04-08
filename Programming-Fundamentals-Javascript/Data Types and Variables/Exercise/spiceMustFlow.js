function spiceMustFlow(startingYield ) {
    let counter =0
    let  extraxt = 0
     while (startingYield >= 100) {
        counter++
        extraxt += startingYield
        extraxt-=26
        startingYield -=10

     } 
      if (extraxt > 26){
         extraxt-=26
         console.log(counter)
     console.log(extraxt)
      } else {
         console.log(counter)
         console.log(extraxt)
      }
     
     
}
spiceMustFlow(111);