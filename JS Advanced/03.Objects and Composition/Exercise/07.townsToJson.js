function townsToJson(params) {
    let arr = []
    let regex = /\s*\|\s*/
    let firstLine = params.shift().split(regex);
    firstLine.shift();
    firstLine.pop()
    for (let commands of params) {
        let towns = firstLine[0];
        let latitudes= firstLine[1];
        let longitudes = firstLine[2];
        let [nada,town, latitude ,longitude,nada2] =commands.split(regex);
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        let obj = {}
        obj[towns] = town
        obj[latitudes] = Number(latitude)
        obj[longitudes] = Number(longitude)
        arr.push(obj)
    }
    console.log(JSON.stringify(arr))
}
townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);