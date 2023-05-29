function townsInfo(params) {
    let newArr = [];
    class towns {
        constructor(town, latitude, longitude) {
            this.town = town,
                this.latitude = latitude,
                this.longitude = longitude
        }
     solve(){
        console.log(`{ town: '${this.town}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longitude.toFixed(2)}' }`);
     }
    }
    for (let i = 0; i < params.length; i++) {
        let [town, latitude, longitude] = params[i].split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);
       newArr.push( new towns(town,latitude,longitude));
      
    }
for (let towns of newArr) {
    towns.solve()
}

}
townsInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)