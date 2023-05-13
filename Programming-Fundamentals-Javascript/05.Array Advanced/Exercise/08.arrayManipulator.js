function arrayManipulator(params, array) {
    let i = 0;
    let [command, index, element] = array[i].split(' ');
    index = Number(index);
    element = Number(element);
    while (command !== 'print') {
        switch (command) {
            case 'add':
                params.splice(index, 0, element);
                break;
            case 'addMany':
                let addmany = array[i].split(' ');
                for (let j = 2; j < addmany.length; j++) {
                    element = Number(addmany[j]);
                    params.splice(index, 0, element);
                    index++
                }
                break;
            case 'contains':
                console.log(params.indexOf(index));
                break;
            case 'remove':
                params.splice(index, 1);
                break;
 
            case 'shift':
                let rotations = index;
                for (let j = 0; j < rotations; j++) {
                    let element = params.shift();
                    params.push(element);
                }
                break;
            case 'sumPairs':
                
            let sumArray = [];
            if (params.length % 2 === 0) {
                for (let x = 0; x < params.length; x += 2) {
                    let pairs = params[x] + params[x + 1]
                    sumArray.push(pairs);
                }
            } else {
                for (let x = 0; x < params.length - 1; x += 2) {
                    let pairs = params[x] + params[x + 1]
                    sumArray.push(pairs)
                }
                sumArray.push(params.pop());
            }
            params = sumArray;
                break;
        }
        i++
        [command, index, element] = array[i].split(' ');
        index = Number(index);
        element = Number(element);
 
    }
    return `[ ${params.join(', ')} ]`;
}
console.log(arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]));