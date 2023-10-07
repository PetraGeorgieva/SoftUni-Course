function areaAndVolume(area,volume,input) {
    const inputObj = JSON.parse(input);
    let arr = []
    for (const objEntries of inputObj) {
      arr.push({ area: area.call(objEntries), volume: volume.call(objEntries)})
    }           // area: take the contest of the obj  // vol: take  the contest of the obj 
    return arr;
}
function area() {
    return Math.abs(this.x * this.y); // abs() because  JASON.parse(input)
}                                    //  x and y are strings; 
function volume() {
    return Math.abs(this.x * this.y * this.z);

}
areaAndVolume(area, volume, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )