class Hex {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    let string = ('0x' +this.value.toString(16).toUpperCase())
    return string
  }
  plus(objOrNumber) {
    if(objOrNumber instanceof Object ){
        let sum = this.value + objOrNumber.value
        return   new Hex(sum);
      }else{
        let sum = this.value + objOrNumber
        return   new Hex(sum);
    }
  }
  minus(objOrNumber) {
    if(objOrNumber instanceof Object ){
        let sum = this.value - objOrNumber.value
        return   new Hex(sum);
      }else{
        let sum = this.value - objOrNumber
        return   new Hex(sum);
    }
   }
parse(string) {
   return parseInt(string, 16);
}
}
let a = new Hex(10);
let b =new Hex(5);
let c = new Hex(155);
let act2 =  a.plus(c).toString();
let act3 = a.minus(b).toString();
console.log(act2);
console.log(act3)



