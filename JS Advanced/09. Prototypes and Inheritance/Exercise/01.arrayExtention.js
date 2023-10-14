(function result() {
  Array.prototype.last = function () {
    return this[this.length - 1];
    // this === array
  };
  Array.prototype.skip = function (n) {
    n = Number(n)
    let result = this.slice(n)
     return result
  };
  Array.prototype.take = function (n) {
    n = Number(n)
    let result = this.slice(0,n)
     return result
  };
  Array.prototype.sum = function () {
    let sum = this.reduce((a,c)=> a+c,0)
    return sum
  };
  Array.prototype.average = function () {
    let avrg = this.reduce((a,c)=> a+c,0)/this.length
    return avrg;
  };
})();
const arr = [1, 2, 3, 4, 5];
console.log(arr.last());
console.log(arr.skip(2))
console.log(arr.take(2))
console.log(arr.sum())
console.log(arr.average())