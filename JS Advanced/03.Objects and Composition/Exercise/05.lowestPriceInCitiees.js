function lowestPriceInCitiees(params) {
    let newObj = {};
for (let commands of params) {
    let [townName,productName,productPrice] = commands.split(' | ');
    productPrice = Number(productPrice)
   if (!newObj.hasOwnProperty(productName)){
      newObj[productName] = [productPrice,townName]
   }else{
       let currentPrice = newObj[productName][0]
      if(currentPrice > productPrice){
        newObj[productName] = [productPrice,townName]
      }
   }
} 
let objArr = Object.entries(newObj);
for (const [key,value] of objArr) {
    console.log(`${key} -> ${value[0]} (${value[1]})`)
}
}
lowestPriceInCitiees(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)