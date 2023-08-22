function lastK(n,k) {
  let arr = [1]
  let sum = 0;
  let count = 0
  for (let i = 0; i < n-1; i++) {
    sum = 0;
    count = 0;
     while(count !=k){
        if(i >= 0){
            sum+=arr[i]
        }
        i-=1
        count++
      }
      arr.push(sum)
      i+=k
    }
    return arr
  }
lastK(8, 2)
