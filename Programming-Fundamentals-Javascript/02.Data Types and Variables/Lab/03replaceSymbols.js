function replaceSymbols (str,symbol,finalstr) {
   let result = str.replace('_',symbol);
    console.log(result === finalstr ? "Matched" : "Not Matched")
}
replaceSymbols('Str_ng', 'i', 'String'
)
