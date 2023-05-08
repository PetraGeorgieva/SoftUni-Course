function numberModification(n) {
    let nIntoString = '';
    nIntoString += n
    let sumNofn = 0
    let singlenum = ''
    let averagesum = 0;
    if (n > 0) {
        for (let j = 0; j < nIntoString.length; j++) {
            singlenum = Number(nIntoString[j]);
            sumNofn += singlenum
        }
        averagesum = sumNofn / nIntoString.length
        if (averagesum < 6) {

            while (averagesum <= 5) {
                nIntoString += '9';
                sumNofn += 9
                averagesum = sumNofn / nIntoString.length
            }
            console.log(nIntoString)
        } else {
            console.log(n)
        }
    }
}
numberModification(1234567);