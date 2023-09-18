function createAssemblyLine() {
    let newObj = {
     hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = function () {
           if(obj.temp < obj.tempSettings){
            this.temp++
           }else if(obj.temp > obj.tempSettings){
           this.temp--
           }
        };
     },
    hasAudio(obj){
        obj.currentTrack = null;
        obj.nowPlaying = function () {
            if(obj.currentTrack != null){
                const current = Object.assign({}, obj.currentTrack);
                console.log(`Now playing '${current.name}' by ${current.artist}`)
            }
        }
    },
    hasParktronic(obj) {
        obj.checkDistance = function (n) {
            if(n <0.1){
                console.log(`Beep! Beep! Beep!`);
            }else if(n >= 0.1 && n < 0.25){
                console.log('Beep! Beep!');
            }else if(n >= 0.25 && n < 0.5){
                console.log('Beep!')
            } else{
                console.log('')
            }
        } 
    }
}
   return newObj;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};




