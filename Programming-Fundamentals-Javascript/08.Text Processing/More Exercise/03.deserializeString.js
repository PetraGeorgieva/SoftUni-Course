function deserializeString(params) {
    let i = 0;
    let newArr = []
    let lenghtOfNewArr  = 0
    while(params[i] != 'end'){
        let [letter,arrOfIndex]= params[i].split(':')
        arrOfIndex = arrOfIndex.split('/');
        for (let index of arrOfIndex) {
            index = Number(index)
         if (index > lenghtOfNewArr){
            lenghtOfNewArr = index
         }
        }
        i++
    }
   for (let i = 0; i < lenghtOfNewArr ; i++) {
    newArr.push(i) 
   }
   i= 0
   while(params[i] != 'end'){
    let [letter,arrOfIndex]= params[i].split(':')
    arrOfIndex = arrOfIndex.split('/');
    for (let index of arrOfIndex) {
        index = Number(index)
       newArr.splice(index,1,letter)
    }
    i++
}
 console.log(newArr.join(''))
}
deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']
)