function piccolo(params) {
  let map = new Map()
params.forEach(element => {
    let [command,carName] = element.split(', ');
    if(command == 'IN'){
        if(!map.has(carName)){
            map.set(carName);
        }
    }else{
        if(map.has(carName)){
            map.delete(carName);
        }
    }
});
let sorted = [...map.entries()].sort((a,b)=>(a[0]).localeCompare(b[0]))
if(map.size === 0){
    console.log('Parking Lot is Empty')
} else{
    sorted.forEach(element => {
        console.log(element[0])
    });
}
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)