function heroesOfCodeAndLogic(input) {
    let heroes = Number(input.shift());
    let heros = input.splice(0, heroes)
    let i = 0;
    let object = {}
    for (let hero of heros) {
        let [name, hp, mp] = hero.split(' ');
        object[name] = {}
        object[name]['hp'] = Number(hp)
        object[name]['mp'] = Number(mp)
    }
    while (input[i] !== 'End') {
        let commands = input[i].split(' - ');
        switch (commands[0]) {
            case 'CastSpell': castSpell(object,commands[1],commands[2],commands[3])
                break; 
            case 'TakeDamage': takeDamage(object,commands[1],commands[2],commands[3])
                break;
            case 'Recharge': regarge(object,commands[1],commands[2]);
                break;
            case 'Heal': heal(object,commands[1],commands[2]);
                break;
        }
        i++
    }
    function castSpell(object,heroName,mpNeeded,spellName){
        if(object[heroName]['mp'] >= mpNeeded){
          let mps = object[heroName]['mp'] 
          let newMp = mps-=mpNeeded
          object[heroName]['mp'] = newMp
          console.log(`${heroName} has successfully cast ${spellName} and now has ${newMp} MP!`)
        }else{
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }
    function takeDamage(object,heroName,damage,attacker) {
        let hps = object[heroName]['hp'] 
        let currentHp = hps-=damage
        if(currentHp > 0){
            object[heroName]['hp'] = currentHp
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHp} HP left!`)
        }else{
            delete object[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    }
    function regarge(object,heroName,amount) {
        let currentMp = object[heroName]['mp'] 
        let differnce = 200-currentMp
        let amountRecovery = Math.min(differnce,amount)
        object[heroName]['mp'] = currentMp+=amountRecovery
        console.log(`${heroName} recharged for ${amountRecovery} MP!`)
    }
    function heal(object,heroName,amount) {
        let currentMp = object[heroName]['hp'] 
        let differnce = 100-currentMp
        let amountRecovery = Math.min(differnce,amount)
        object[heroName]['hp'] = currentMp+=amountRecovery
        console.log(`${heroName} healed for ${amountRecovery} HP!`)
    }
  let objArr = Object.entries(object)
  for ( let [name,obj] of objArr) {
    console.log(name)
    let objArray = Object.entries(obj)
    for (let [type, number] of objArray) {
        if(type == 'hp'){
            console.log(`  HP: ${number}`)
        } else{
        console.log(`  MP: ${number}`)
        }
    }
  }
}
heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])