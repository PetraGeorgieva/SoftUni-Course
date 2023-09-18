function heroicInventory(params) {
    let result  = [];
    for (const command of params) {
        let [name,level,items] = command.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name,level, items})
    }
    console.log(JSON.stringify(result))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)