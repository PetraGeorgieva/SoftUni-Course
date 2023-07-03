function extractFile(string) {
    let arr = string.split('\\');
    let fileNames = arr.pop()
    let fileNameArr = fileNames.split('.');
    let fileExtension = fileNameArr.pop()
    let fileName = fileNameArr.join('.')
 console.log(`File name: ${fileName}`);
 console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')