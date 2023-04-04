function arrayRotation(array,numofRotation) {
    let newarray = []
    for (i = 0 ; i < array.length ; i++){  // arrays.length / 2  --> we do the half 
        
        let newIndex = 0
        for(let i1 = 0; i1 <= numofRotation; i1++){
            
        }
        newIndex = i + numofRotation
        let oldElement = array[newIndex];
        array[newIndex] = array[i] 
        array[i] = oldElement

        
   
}
console.log(array)
}
arrayRotation([51, 47, 32, 61, 21], 2);