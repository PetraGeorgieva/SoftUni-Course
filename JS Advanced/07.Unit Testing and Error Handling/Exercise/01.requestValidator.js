function requestValidator(objCopy) {

    const methods = ["GET","POST","DELETE","CONNECT"];
    const urls = ["HTTP/0.9","HTTP/1.0","HTTP/1.1","HTTP/2.0"]
    let regex2 = /^[a-zA-Z.0-9]+$/gm;
    let regex = /[<>&'"\\]/gm;

    let stringMethod = objCopy.method
    if(!objCopy.hasOwnProperty("method") || !methods.includes(stringMethod)) {
        throw new Error('Invalid request header: Invalid Method')
    }
     let string = objCopy.uri
     let isRegexTrue = regex2.test(string)
    if(!objCopy.hasOwnProperty("uri") || !isRegexTrue|| string == ""){
        throw new Error('Invalid request header: Invalid URI');
    }
    let stringVersion = objCopy.version
    if(!objCopy.hasOwnProperty("version") || !urls.includes(stringVersion)){
        throw new Error('Invalid request header: Invalid Version')
    }
    if(!objCopy.hasOwnProperty("message") ||  regex.test(objCopy.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
     
    return objCopy;
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})