function areaAndVolume(area,vol,input) {
    const inputObj = JSON.parse(input);
    let arr = []
    for (const objEntries of inputObj) {
      arr.push({ area: area.call(objEntries), volume: vol.call(objEntries)})
    }
    return arr;
}
function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);

}
areaAndVolume(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )