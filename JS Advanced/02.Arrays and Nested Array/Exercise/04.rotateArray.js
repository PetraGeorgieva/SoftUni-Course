function rotateArray(params, n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        let chop = params.splice(params.length - 1, 1)
        params.unshift(chop[0])
    }
    console.log(params.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)