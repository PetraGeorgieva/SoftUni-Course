function solution() {
  let string = ""; // string

  return {
    append: (s) => (string += s),
    removeStart: (n) => (string = string.substring(n)),
    removeEnd: (n) => (string = string.substring(0, string.length - n)),
    print: () => console.log(string),
  };
}

let firstZeroTest = solution();
   // return an object that can do 
   // append, remove,removeEnd,print => function;
   // 
   firstZeroTest.append("hello");
   firstZeroTest.append("again");
   firstZeroTest.removeStart(3);
   firstZeroTest.removeEnd(4);
firstZeroTest.print();
