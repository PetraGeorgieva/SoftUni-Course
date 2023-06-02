function blackFlag(input) {
let days = Number(input.shift());
let dailyPlunder = Number(input.shift());
let expectedPlunder =  Number(input.shift());
let totDailyPluder = 0;
for (let i = 1; i <= days; i++) {
    totDailyPluder+=dailyPlunder
        if (i % 3 === 0) {
            totDailyPluder += dailyPlunder * 0.5;
        }
        if (i % 5 === 0) {
            totDailyPluder -= totDailyPluder * 0.3;
        }
}
 if(totDailyPluder >= expectedPlunder){
    console.log(`Ahoy! ${totDailyPluder.toFixed(2)} plunder gained.`)
 } else {
    let percentOftheplunder =  (totDailyPluder/expectedPlunder) * 100
    console.log(`Collected only ${percentOftheplunder.toFixed(2)}% of the plunder.`)
 }
}
blackFlag((["15",
"60",
"380"])

)