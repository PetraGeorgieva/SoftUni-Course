function pieceOfPie(params,str,str1) {
    let arr = []
    for (let i = params.indexOf(str); i <= params.indexOf(str1); i++) {
        arr.push(params[i])
    }
return arr;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)