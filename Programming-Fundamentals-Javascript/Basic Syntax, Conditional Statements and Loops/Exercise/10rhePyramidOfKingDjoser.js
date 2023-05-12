function pyramid(base, boh) {
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let counter = 0
    let totlapis = 0
    let totgold = 0
    let resultstone = 0
    let resultmarble = 0
    let totresultstone = 0
    let totresultmarble = 0
    let totresultlapis = 0
    let secondcounter = 0
    let height = 0
    if (base % 2 !== 0) {
        for (let i = base; i >= 3; i -= 2) {
            secondcounter++
            counter++
            if (counter == 5) {
                counter = 0
                lapis = (i * i) - ((i - 2) * (i - 2))
                stone = (i - 2) * (i - 2)
                resultstone = boh * stone
                totresultstone += resultstone
                totlapis = lapis * boh
                totresultlapis += totlapis
                continue;
            }
            marble = (i * i) - ((i - 2) * (i - 2))
            stone = (i - 2) * (i - 2)
            resultmarble = boh * marble
            resultstone = boh * stone
            totresultmarble += resultmarble
            totresultstone += resultstone


        }
    } else {
        for (let i = base; i > 2; i -= 2) {
            secondcounter++
            counter++
            if (counter == 5) {
                counter = 0
                lapis = (i * i) - ((i - 2) * (i - 2))
                stone = (i - 2) * (i - 2)
                resultstone = boh * stone
                totresultstone += resultstone
                totlapis = lapis * boh
                totresultlapis += totlapis
                continue;
            }
            marble = (i * i) - ((i - 2) * (i - 2))
            stone = (i - 2) * (i - 2)
            resultmarble = boh * marble
            resultstone = boh * stone
            totresultmarble += resultmarble
            totresultstone += resultstone
        }

    }
    if (base % 2 !== 0) {
        secondcounter += 1
        height = secondcounter * boh
        gold = 1 * 1
        totgold = gold * boh
        console.log(`Stone required: ${Math.ceil(totresultstone)}`)
        console.log(`Marble required: ${Math.ceil(totresultmarble)}`)
        console.log(`Lapis Lazuli required: ${Math.ceil(totresultlapis)}`)
        console.log(`Gold required: ${Math.ceil(totgold)}`)
        console.log(`Final pyramid height: ${Math.floor(height)}`)
    } else {
        secondcounter += 1
        height = secondcounter * boh
        gold = 2 * 2
        totgold = gold * boh
        console.log(`Stone required: ${Math.ceil(totresultstone)}`)
        console.log(`Marble required: ${Math.ceil(totresultmarble)}`)
        console.log(`Lapis Lazuli required: ${Math.ceil(totresultlapis)}`)
        console.log(`Gold required: ${Math.ceil(totgold)}`)
        console.log(`Final pyramid height: ${Math.floor(height)}`)
    }
}
pyramid(23, 0.5)