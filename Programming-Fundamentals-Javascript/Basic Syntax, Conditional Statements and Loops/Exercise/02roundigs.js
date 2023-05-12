function roundings(n,m) {
     if (m >= 15){
        m = 15
     }
    
    console.log(parseFloat(n.toFixed(m)))
    
  }
   roundings(3.1415926535897932384626433832795,2)