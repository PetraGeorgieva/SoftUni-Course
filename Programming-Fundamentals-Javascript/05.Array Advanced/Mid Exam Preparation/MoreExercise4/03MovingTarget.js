function movingTarget(params) {
  let sequence = params.shift().split(' ').map(x => Number(x));
  let i = 0;
  while (params[i] != 'End') {
    let [command, index, value] = params[i].split(' ');
    index= Number(index)
    value= Number(value)
    if (command === 'Shoot') {
      if (index >= 0 && index < sequence.length) {
        let result = sequence[index] -= value;
        if (result > 0) {
          sequence[index] = result
        } else {
          sequence.splice(index, 1)
        }
      }
    } else if (command === 'Add') {
      if (index >= 0 && index < sequence.length) {
        sequence.splice(index, 0, value)
      }else{
        console.log("Invalid placement!")
      }

    } else if (command === 'Strike') {
      if (index >= 0 && index < sequence.length && (index + value)< sequence.length && (index - value) >= 0) {
        sequence.splice(index, value+1);
        sequence.splice(index - value, value);
      } else {
        console.log('Strike missed!')
      }
    }
    i++
  }
  console.log(sequence.join('|'))
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])