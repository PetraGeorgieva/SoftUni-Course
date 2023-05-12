function bitcoins(input) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let result = 0;
    let totresult = 0;
    let counter = 0
    let bitcoincounter = 0
    let totgold = 0
    let day = 0
    for (let i = 0; i < input.length; i++) {
        counter++
        if (counter % 3 == 0) {
            totgold = Number(input[i]);
            result = totgold * 0.70 * gold
            totresult += result
            if (totresult >= bitcoin) {
                while (totresult >= bitcoin) {
                    totresult -= bitcoin
                    bitcoincounter++
                if (bitcoincounter == 1) {
                    day = counter
                }
                }
            }
        } else {
            totgold = Number(input[i]);
            result = totgold * gold;
            totresult += result;
            if (totresult >= bitcoin) {
                while (totresult >= bitcoin) {
                    totresult -= bitcoin
                    bitcoincounter++
                if (bitcoincounter == 1) {
                    day = counter
                }
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoincounter}`)
    if (day > 0){
    console.log(`Day of the first purchased bitcoin: ${day}`)
    }
    console.log(`Left money: ${totresult.toFixed(2)} lv.`)
}
bitcoins([3124.15,
    504.212,
    2511.124])