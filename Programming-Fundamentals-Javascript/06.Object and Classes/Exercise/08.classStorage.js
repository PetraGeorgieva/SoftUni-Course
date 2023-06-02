class Storage{
      constructor (capacity){
        this.capacity =  capacity
        this.storage = [];
       
      }
      get totalCost() {        
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }

      addProduct(addProduct){
        this.storage.push(addProduct);
        this.capacity-=addProduct.quantity

      }
      getProducts(){
        let collect = []
        this.storage.forEach(x=> { 
            collect.push(JSON.stringify(x));
        }) 
        return collect.join('\n');
      }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
