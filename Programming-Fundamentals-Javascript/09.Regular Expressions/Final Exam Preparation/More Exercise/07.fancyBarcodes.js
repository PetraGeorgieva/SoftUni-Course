function fancyBarcodes(params) {
    let n = Number(params.shift());
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    let digitPattern = /\d/g
    for (let i = 0; i < n; i++) {
        let barcode = params[i];
        let match = pattern.exec(barcode)
        if (pattern.test(barcode)) {
            let text = match[1]
            let groupPatternLetter = /^(?<barcode>[A-Z]{1}[A-Za-z]{4,}[A-Z]{1})/g
            if (groupPatternLetter.test(text)) {
                console.log(`Product group: 00`);
            } else {
                let digitGrop = [...text.matchAll(digitPattern)]
                let result = ''
                digitGrop.forEach(element => {
                    result += element
                });
                console.log(`Product group: ${result}`);
            }

        } else {
            console.log('Invalid barcode')
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);