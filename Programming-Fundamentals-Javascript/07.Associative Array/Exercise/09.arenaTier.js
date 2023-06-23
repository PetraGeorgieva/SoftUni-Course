function arenaTier(params) {
    let tier = new Map();
    let i = 0;
    while (params[i] != 'Ave Cesar') {
        if (params[i].includes('vs')) {
            let [gladiator, secondGladiator] = params[i].split(' vs ');
            if (tier.has(gladiator) && tier.has(secondGladiator)) {
                let techGladiator = tier.get(gladiator);
                let techSecondGladiator = tier.get(secondGladiator);
                let totalgladiatorPoints = new Map();
                let bigSkillMap = techSecondGladiator.size > techGladiator.size ? techSecondGladiator : techGladiator
                let smallSkillMap = techSecondGladiator.size < techGladiator.size ? techSecondGladiator : techGladiator
                for (let [techName, skills] of (bigSkillMap)) {
                    if (smallSkillMap.has(techName)) {
                        for (let [gladiator, technique] of Array.from(tier)) {
                            let sum = 0;
                            for (let [tech, skill] of Array.from(technique)) {
                                sum += skill
                            }
                            totalgladiatorPoints.set(gladiator, sum)
                        }

                        if (totalgladiatorPoints.get(gladiator) > totalgladiatorPoints.get(secondGladiator)) {
                            techSecondGladiator.delete(techName)
                        } else {
                            techGladiator.delete(techName)
                            
                        }
                    }
                }
            }
        } else {
            let [name, technique, skill] = params[i].split(' -> ');
            skill = Number(skill)
            if (!tier.has(name)) {
                tier.set(name, new Map());
            }
            if (tier.get(name).has(technique)) {
                let currentValue = Number(tier.get(name).get(technique));
                if (currentValue < skill) {
                    tier.get(name).set(technique, skill)
                }
            } else {
                tier.get(name).set(technique, skill);
            }
        }
        i++
    }
    let gladiatorPoints = new Map();
    for (let [gladiator, technique] of Array.from(tier)) {
        let sum = 0;
        for (let [tech, skill] of Array.from(technique)) {
            sum += skill
        }
        if (sum != 0) {
            gladiatorPoints.set(gladiator, sum)
        }
    }
    let sortedByPoints = Array.from(gladiatorPoints).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });
    for (let [names, points] of sortedByPoints) {
        console.log(`${names}: ${points} skill`);
        let tech = Array.from(tier.get(names)).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        });
        for (let [techName, skillPoint] of tech) {
            console.log(`- ${techName} <!> ${skillPoint}`)
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    )