function editElement(obj,match,replaceText) {
    let text = obj.textContent;
    let regex = new RegExp(match,'g')
    let res = text.replace(regex,replaceText);
    obj.textContent = res;
}