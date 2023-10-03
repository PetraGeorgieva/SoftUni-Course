function argumentInfo(...argument) {
    let type = {}
    argument.forEach(el => {
        console.log(`${typeof(el)}: ${el}`)

        if(!type.hasOwnProperty(typeof(el))){
            type[typeof(el)] = 0;
        }
        type[typeof(el)] = type[typeof(el)]+1;
});

   for (const [key,count] of Object.entries(type).sort((a,b)=> b[1]-a[1])) {
     console.log(`${key} = ${count}`);
   }
}

argumentInfo('cat', 42, function () { console.log('Hello world!')})