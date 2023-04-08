function arrayRotation(array,numofRotation) {
    let newarray = []

    for (let i = 0 ; i < numofRotation; i++){  // that in poor words means in this case that 2 numbers are going to go in the end of the array
        let currentElement = array[0]          // we select the first element that is going in the end
    for (i1 = 1 ; i1 < array.length ; i1++){  // so the cicle starts from the second element
        newarray.push(array[i1])              // we push in a new array evry elements of the array 
    }
        newarray.push(currentElement);       // and in the end the firs element 
        array = newarray;                   // our array is now equal to the new array
        newarray = [];                      // newarray is empty so we can do another "rotation"
}
console.log(array.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2);// --> 47,32,61,21,51 --> 32,61,21,51,47;