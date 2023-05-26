function numbers(string){
 let array = string.split(' ').map(x=> Number(x));
 let sum = 0;
 let averageNumber = 0;
 for (let i = 0; i < array.length; i++) {
    let num = array[i]
        sum+=num
 }
   averageNumber = sum/array.length
  let topgreater = array.filter(x=> x > averageNumber).sort((a, b) => b - a);
  if(topgreater.length >= 1 && topgreater.length <= 5){
    console.log(topgreater.join(' '));
  } else if (topgreater.length > 5){
    let topfive =  topgreater.slice(0,5);
    console.log(topfive.join(' '));
  } else {
    console.log('No')
  }

}
numbers('1 2')