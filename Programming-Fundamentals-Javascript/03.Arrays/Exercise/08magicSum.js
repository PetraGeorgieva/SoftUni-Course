function magicSum(array,n) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        
        for (let i1 = i + 1; i1 < array.length; i1++){
            let secondelement = array[i1]
            if((element + secondelement) === n){
                console.log(`${element} ${secondelement}`)
            }
        }
        
        
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )