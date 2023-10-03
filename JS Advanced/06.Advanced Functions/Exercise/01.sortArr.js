function sortArr(array,command) {
    return command === "asc"? array.sort((a,b)=> a-b): array.sort((a,b)=> b-a)
}
sortArr([14, 7, 17, 6, 8], 'asc')