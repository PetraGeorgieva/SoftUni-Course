(function strings() {
  String.prototype.ensureStart = function (str) {
    const actualString = this.toString()
    if(!actualString.startsWith(str)){
       return str+=actualString;
    }else{
        return actualString;
    }
  };
  String.prototype.ensureEnd = function (str) {
    let actualString = this.toString()
    if(!actualString.endsWith(str)){
       return actualString+=str
    }else{
        return actualString;
    }
  };
  String.prototype.isEmpty  = function () {
   
    if(this.toString().length === 0){
      return true;
    }
    return false;
  };
  String.prototype.truncate = function (n) {
  let ellipsis = '...';
   let actualString = this.toString()
   if(n<=3){
    return '.'.repeat(n);
   }
   if(actualString.length <= n){
    return actualString
   }
   let truncValue = actualString.substring(0,n-2)
   let lastIndex = truncValue.lastIndexOf(" ");
   if(lastIndex != -1){
     return `${actualString.substring(0,lastIndex)}${ellipsis}`
   }
   return `${actualString.substring(0,n-3)}${ellipsis}`
  };
  String.format  = function (string, ...array) {
    let str = string
    for (let i = 0; i < array.length; i++) {
        let index = str.indexOf(`{${i}}`);
     while(index !==-1){
        str = str.replace(`{${i}}`, array[i]);
        index = str.indexOf(`{${i}}`);
     }
    }
      return str;
  };
})();

