function equalSum(arr) {     
    let result = 'no'; // in questo modo non devo mettere un if/else perchè so che nel momento in cui nel ciclo due somme si incrociano questo risultato verrà modificato 
    for (let i = 0; i < arr.length ; i++) {   // i inizia da 0 e va fino alla lunghezza dell'array  ( tipo 4)
        let leftSum = 0;                     //  
        let rightSum = 0;                   // una volta che la somma non è pari si annulla
        for (let i1 = 0; i1< i; i1++) {      // per la somma sinistra si inizia da 0 e si arriva fino al index del ciclo (parte da zero e arriva fino a 0)
            leftSum += arr[i1];         // (fa la somma e prosegue)
        } 
        for (let i2 = arr.length - 1; i2 > i; i2--) {  // per la somma della parte destra invece si inizia dalla fine del ciclo (parte da 3 (perche abbaimo lo zero) e arriva a 0)
            rightSum += arr[i2];                       // e si arriva alla posizione dell'index   (fa la somma e prosegue)
        }  
        if (leftSum === rightSum){     //(controlla se sono ugiali e se non lo sono continua il ciclo )
            result = i;               // se a un certo punto le somme sono ugiali da il risultato dell'index di dove si sono incrociati le somme uguali 
            break;
        }
    } 
    console.log(result);
}
equalSum([1,2,3,3]);  // in questo esempio all'index 2 si incorciano perche 1+2 = 3  e il 3 dell'index 3 all'index 2 si ferma e non si somma a nulla quindi fa 3