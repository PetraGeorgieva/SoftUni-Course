function  demophone (band,album,songName) {
   let time = (album.length * band.length) * songName.length / 2;
   let rotation = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotation} times.`)
}
demophone('Black Sabbath', 'Paranoid', 'War Pigs')