function rotateArray(array) {
  let newarray = []
  let rotation = Number(array.pop())
  for (let i = 1; i <= rotation; i++) {
    let lastelement = array[array.length - 1]
    newarray.push(lastelement)
    for (i1 = 0; i1 < array.length - 1; i1++) {  // array.length - 1 because last element is push in the new array and we don't needed it more 
      newarray.push(array[i1])
    }
    array = newarray;
    newarray = [];
  }
  console.log(array.join(' '))
}
rotateArray(
  ['Banana', 'Orange', 'Coconut', 'Apple', '15']
)