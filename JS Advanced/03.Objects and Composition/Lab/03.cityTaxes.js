function cityTaxes(name,population,treasury) {
    let obj =  {
        name,
        population: Number(population),
        treasury : Number(treasury),
        taxRate : 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
          },
          applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
          },
          applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
          },
      
    };
    return  obj;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyRecession(5);
console.log(city);



