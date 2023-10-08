function lookupChar(string, index) {
    if (typeof string !== "string" || !Number.isInteger(index)) {
      return undefined;
    }
    if (string.length <= index || index < 0) {
      return "Incorrect index";
    }
  
    console.log(string.charAt(index))
  }
  let string3 = 'mamma';
        let string4 = 'sorry'

  lookupChar(string3,1)
  lookupChar(string4,2)