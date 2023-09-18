function print(input,n) {
    let arr = []
  for (let i = 0; i < input.length; i+=n) {
   arr.push(input[i])
  }
  return arr;
}
print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
