function encodeAndDecodeMessages() {
const buttonsRef = document.querySelectorAll("button");
const textAria = document.querySelectorAll("textarea");
const encodeButton = buttonsRef[0];
const decodeButton = buttonsRef[1];
const encodeTextAria = textAria[0];
const decodeTextAria = textAria[1];

encodeButton.addEventListener("click",encodeAndSendMSG);
decodeButton.addEventListener("click",decodeAndSendMSG);

function encodeAndSendMSG(e) {
  let currentText = encodeTextAria.value;
  let newMsg = "";
  for (let word of currentText) {
    let chNumber = word.charCodeAt()
    chNumber++
    newMsg+= String.fromCharCode(chNumber)
  }
  decodeTextAria.value = newMsg
  encodeTextAria.value = '';
}
function decodeAndSendMSG(e) {
    let currentText = decodeTextAria.value;
    let decode = "";
    for (let word of currentText) {
      let chNumber = word.charCodeAt()
      chNumber--
      decode+= String.fromCharCode(chNumber)
    }
    decodeTextAria.value = decode
    
}
}