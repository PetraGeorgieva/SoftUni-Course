function treasureFinder(params) {
    let keys = params.shift().split(' ').map(x=>Number(x));
    let i = 0;
    let result  =''
    let newArr = []
    while(params[i] != 'find'){
        let string = params[i]
        let x = 0;
          for (let j = 0; j < string.length; j++) {
            if (x <= keys.length-1){
                let key = keys[x]
                let number = string[j].charCodeAt()
                let char =   String.fromCharCode(number-key);
                result+=char
                x++
            } else{
                x= 0
                let key = keys[x]
                let number = string[j].charCodeAt()
                let char =   String.fromCharCode(number-key);
                result+=char
                x++ 
            }
        }
    newArr.push(result)
    result=''
i++
    }
    for (let line of newArr) {
        let [hidden,type,coordination] = line.split('&')
         coordination = coordination.split('<')
        console.log(`Found ${type} at ${coordination[1].substring(0,coordination[1].lastIndexOf('>'))}`)
    }
}
treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]

)