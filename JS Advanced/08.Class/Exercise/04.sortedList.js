class List {
    constructor(){
        this.array = [];
        this.size  = 0;
    }
  	add(element) {
        this.array.push(element)
         this.array =this.array.sort((a,b)=> a-b)
         this.updateSize()
    }
	remove(index) {
        if(this.array[index] === undefined){
            return;
        }
            this.array.splice(index,1);
            this.array =this.array.sort((a,b)=> a-b)
            this.updateSize()
        
    }
	get(index){
        if(this.array[index] === undefined){
            return;
        }
        let element =  this.array.slice(index,index+1)
        return element[0];
        
    }
    updateSize (){
       this.size = this.array.length
    }
     
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1)
console.log(list.get(1));
console.log(list.size)

