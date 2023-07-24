function worldTour(params) {
    let stops = params.shift()
    let i = 0;
    while(params[i] != 'Travel'){
        let commands = params[i].split(':');
        switch (commands[0]) {
            case 'Add Stop':
                let index = Number(commands[1]);
                let string = commands[2];
                if(index < stops.length && index >= 0){
                    stops = stops.split('')
                    stops.splice(index,0,string);
                    stops = stops.join('');
                    console.log(stops)
                }
                break;
            case 'Remove Stop':
                let firstIndex = Number(commands[1]);
                let secondIndex =Number(commands[2]);
                if(firstIndex >= 0 && firstIndex < stops.length && secondIndex >= 0 && secondIndex < stops.length ){
                     stops = stops.split('')
                     stops.splice(firstIndex,(secondIndex-firstIndex)+1);
                     stops = stops.join('');
                     console.log(stops)
                }
                break;
            case 'Switch':
                let oldString = commands[1];
                let newString = commands[2];
                if(stops.includes(oldString)){
                 stops =  stops.replace(oldString,newString)
                  console.log(stops)
                }
                break;
        }
        i++
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])