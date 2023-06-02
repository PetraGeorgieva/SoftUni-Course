function shootForTheWin(params) {
    let elements = params.shift().split(' ').map(x=>Number(x));
    let i = 0;
   
    while(params[i] != 'End'){
        let index = Number(params[i])
        if(index >= 0 && index < elements.length){
        let target = Number(elements[index]);
        for (let x = 0 ; x < elements.length; x++) {
            let interger = elements[x];
            if(interger != -1){
            if(target < interger){
              interger-=target;
              elements[x] = interger;
            } else if( target >= interger){
                interger+=target;
                elements[x] = interger;
            }
            }
        }
        elements.splice(index,1,-1);
    }
        i++
    }
    let counter = elements.filter(x=> x=== -1)
    console.log(`Shot targets: ${counter.length} -> ${elements.join(' ')}`)
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

