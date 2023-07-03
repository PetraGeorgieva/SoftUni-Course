function matchfullName(names){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = pattern.exec(names)
    let result =[]
    while (match != null ) {
        result.push(match[0])
        match = pattern.exec(names);
    }
    console.log(result.join(' '))
}
matchfullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")