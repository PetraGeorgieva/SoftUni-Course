function solution(n) {
  return function add5 (n2) {
    return result = n+n2;
  }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
