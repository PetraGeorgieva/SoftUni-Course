function storage(params) {
    let storageAssArr = new Map();
    params.forEach(element => {
        let [item,value] = element.split(' ');
        value = Number(value)
        if(!storageAssArr.has(item)){
            storageAssArr.set(item, value)
        } else {
           let currentQuantity =  Number(storageAssArr.get(item)) 
           storageAssArr.set(item,currentQuantity+value);
        }

    });
    for (const [key,value] of storageAssArr) {
        console.log(`${key} -> ${value}`);
        
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)