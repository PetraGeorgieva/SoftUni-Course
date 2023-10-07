function calculator() {
     let obj = {};
  return  {
    init(selector1, selector2, selector3) {
        obj.inputNumberOne = document.querySelector(selector1)
        obj.inputNumberTwo = document.querySelector(selector2)
        obj.resultInput = document.querySelector(selector3)
    },

    add() {
      obj.resultInput.value = Number(obj.inputNumberOne.value) + Number(obj.inputNumberTwo.value);
    },
    subtract() {
      obj.resultInput.value = Number(obj.inputNumberOne.value)  -  Number(obj.inputNumberTwo.value);
    },
  };
}

const calculate = calculator();
 calculate.init("#num1", "#num2", "#result");

