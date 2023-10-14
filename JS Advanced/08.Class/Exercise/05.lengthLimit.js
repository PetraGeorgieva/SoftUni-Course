class Stringer{
    constructor(string,initiallength){
        this.string = string;
        this.initiallength = initiallength;
        this.innerString = string;
        this.innerLength = initiallength
    }
    increase(length){
    this.innerLength = this.initiallength
     this.innerLength =  this.innerLength+=length
     if(this.innerLength <= 0){
        this.innerLength = 0;
    }
    }
    decrease(length){
        this.innerLength = this.initiallength
        this.innerLength =  this.innerLength-=length
        if(this.innerLength <= 0){
           this.innerLength = 0;
        }
       }
    toString(){
      
        if( this.innerLength == 0){
            return '...'
        }
        if(this.innerLength >= this.string.length){
            return this.string.slice(0,)
        }
        if(this.innerLength > 0 && this.innerLength < this.string.length){
           let strings = this.string.slice(0,this.innerLength )
            strings+='...'
           return strings 
        }
    
    }

}

let test = new Stringer("test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
