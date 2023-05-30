function inventory(input){
    let heroes = []
for (let el of input) {
    let [name,level,items] = el.split(' / ');
    level = Number(level)
    let currentHero= {
        name,
        level,
        items
    }
    heroes.push(currentHero)
}
   heroes.sort((x,y)=> x.level - y.level);

   heroes.forEach(hero => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
   });
     
      
   
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )