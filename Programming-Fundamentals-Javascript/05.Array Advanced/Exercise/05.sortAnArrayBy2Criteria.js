function sortingByTwoCriteria(input) {
    input.sort((x, y) => {
        if (x.length - y.length === 0) {
            return x.localeCompare(y)
        }
        return x.length - y.length
    });
    console.log(input.join('\n'));
}
sortingByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']);
//sortingByTwoCriteria(['alpha', 'beta', 'gamma'])