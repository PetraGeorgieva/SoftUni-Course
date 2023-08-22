function sortanArrayby2criteria(input) {
    input.sort((x, y) => {
        if (x.length - y.length === 0) { // if the difference of the length is equal to 0 
            return x.localeCompare(y)   // sort them by locale compare
        }
        return x.length - y.length  // else by ascending length
    });
    console.log(input.join('\n'));
}
sortanArrayby2criteria(['alpha', 
'beta', 
'gamma']
)