class Garden {
   constructor(spaceAvailable){
    this.spaceAvailable = spaceAvailable
    this.plants = []
    this.storage =[]
   }

   addPlant (plantName, spaceRequired){
    if(this.spaceAvailable < spaceRequired){
        throw new Error('Not enough space in the garden.');
    }else{
        let currentSpace = this.spaceAvailable - spaceRequired;
        this.spaceAvailable = currentSpace;
        let isTrue = false;
        this.plants.forEach(el=>{
            if(el['plantName'] == plantName){
                isTrue = true;
                let currentPlantSpace = el['spaceRequired'];
                el['spaceRequired'] = currentPlantSpace+spaceRequired
            }
        })
        if(isTrue == false){
            this.plants.push({plantName,spaceRequired,ripe:false,quantity:0});
        }
        
        
    }
    return `The ${plantName} has been successfully planted in the garden.`
   }
   ripenPlant(plantName, quantity){
    let isTrue = false;
    let isRipe = false
    if(quantity <= 0){
        throw new Error(`The quantity cannot be zero or negative.`);
    }
    this.plants.forEach(el=>{
       
        if(el['plantName'] == plantName){
            isTrue = true;

            if(el['ripe'] == true){
                isRipe = true
            }else{
                el['ripe'] = true;
                el['quantity'] = quantity;
            } 
        }
       
    })
    if(isTrue == false){
        throw new Error(`There is no ${plantName} in the garden.`);
    }
    if(isRipe == true){
        throw new Error(`"The ${plantName} is already ripe.`);
    }
   if(quantity == 1){
    return `${quantity} ${plantName} has successfully ripened.`
   }else{
    return `${quantity} ${plantName}s have successfully ripened.`
   }

   }
   harvestPlant(plantName){
    let isTrue = false;
    let isRipe = false;
    let index = 0;
    this.plants.forEach(el=>{
       
        if(el['plantName'] == plantName){
            isTrue = true;
            if(el['ripe'] == true){
                isRipe = true
            }
            index = this.plants.indexOf(el)
        }
       
    })
    if(isTrue == false){
        throw new Error(`There is no ${plantName} in the garden.`);
    }
    if(isRipe == false){
        throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }
    let plantObj = this.plants[index];
    let plantQuantity = plantObj['quantity']
    let name = plantObj['plantName']
    let space = plantObj['spaceRequired']
    this.spaceAvailable = this.spaceAvailable+space
    this.storage.push({[name] : plantQuantity});
    this.plants.splice(index,1);
    return `The ${plantName} has been successfully harvested.`
   }
   generateReport(){
    let result = `The garden has ${this.spaceAvailable} free space left.`
    let resultArr = []
    
         this.plants.forEach(el=>{
              resultArr.push(el['plantName'])
         });
        resultArr = resultArr.sort((a,b)=> a-b);
        result+=`\nPlants in the garden: ${resultArr.join(', ')}`
        if(this.storage.length <=0){
         result+=`\nPlants in storage: The storage is empty.`
        }else{
            result+=`\nPlants in storage: `
            this.storage.forEach(el=>{
                let arrObj = Object.entries(el)
                for(let [key,propery] of arrObj){
                    result+=`${key} (${propery}), `
                }
            })
        
        }
        result  = result.substring(0,result.length-2)
        return result;
   }
 

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());