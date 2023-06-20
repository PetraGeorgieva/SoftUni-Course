function songs(array){
    
class Song {
    constructor (type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time
    }
}
    let songs = []
    let numberOfSongs = array.shift();
    let typeofsong = array.pop();
     
for (let i = 0; i < numberOfSongs; i++) {
  let [type,name,time] = array[i].split('_');
  let song = new Song(type,name,time);
  songs.push(song)
}
if(typeofsong === 'all'){
    songs.forEach((song) => console.log(song.name));
 } else {
    let filtered = songs.filter((song)=> song.type === typeofsong);
    filtered.forEach((song)=> console.log(song.name))
 }


 

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )