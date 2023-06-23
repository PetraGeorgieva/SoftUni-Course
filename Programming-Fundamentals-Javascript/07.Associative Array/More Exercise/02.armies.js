function armies(params) {
    let newMap = new Map();
    for (let line of params) {

        if (line.includes('arrives')) {
            let [leader, army] = line.split(' arrives');
            newMap.set(leader, new Map())
        } else if (line.includes('defeated')) {
            let [leader, defeated] = line.split(' defeated');
            if (newMap.has(leader)) {
                newMap.delete(leader)
            }
        } else if (line.includes(': ')) {
            let [leaders, army] = line.split(': ');
            let [armys, armycount] = army.split(', ');
            armycount = Number(armycount);
            if (newMap.has(leaders)) {
                newMap.get(leaders).set(armys, armycount)
            }
        } else if (line.includes(' + ')) {
            let [armies, armiescount] = line.split(' + ');
            armiescount = Number(armiescount);
            let newMapArr = [...newMap.entries()]
            for (let [key, values] of newMapArr) {
                if (values.has(armies)) {
                    let current = values.get(armies);
                    values.set(armies, current + armiescount)
                    newMap.set(key, values)
                }

            }

        }
    }
    let mapforcount = new Map()
    let armyLeaders = [...newMap.entries()]
    let count = 0;
    for (let [leaderName, armiesName] of armyLeaders) {
        let arrayOfArmies = [...armiesName.entries()]
        for (let [armyName, value] of arrayOfArmies) {
            count += value
        }
        mapforcount.set(leaderName, count)
        count = 0;
    }
    let sortedByPoints = [...mapforcount.entries()].sort((a, b) => b[1] - a[1])
    for (let [names, points] of sortedByPoints) {
        console.log(`${names}: ${points} `);
        let tech = Array.from(newMap.get(names)).sort((a, b) => b[1] - a[1]);
        for (let [techName, skillPoint] of tech) {
            console.log(`>>> ${techName} - ${skillPoint}`)
        }
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])