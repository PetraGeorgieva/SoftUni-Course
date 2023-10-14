function classHierarchy() {
    class Figure{
        constructor(units = "cm"){
            this.units = units;
        }
        get area(){

        }
        changeUnits(type){
        this.units = type
        }
        toString(){
            return `Figures units: ${this.units}`;
        }
    }

   class Circle extends Figure {
     constructor(radius, units){
        super(units)
        this._radius = radius;
     }
     get _divideValue(){
        switch (this.units) {
          case 'cm': return 1;                
          case 'mm': return 0.1;
          case 'm':  return 100;
        }
    }
     get radius(){
        return this._radius/this._divideValue;
     }
     get area(){
       return Math.PI * this.radius * this.radius
     }

     toString(){
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
    }
   }
   class Rectangle extends Figure{
          constructor(width, height, units ){
            super(units)
              this._width = width;
              this._height = height
             
          }
          get _divideValue(){
              switch (this.units) {
                case 'cm': return 1;                
                case 'mm': return 0.1;
                case 'm':  return 100;
              }
          }
          get width(){
         return this._width/this._divideValue;
          }
          get height(){
            return this._height/this._divideValue;
          }
          get area(){
            let area = this.width*this.height
            return area;
          }
          toString(){
             return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
         }
   }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
let classes = classHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
