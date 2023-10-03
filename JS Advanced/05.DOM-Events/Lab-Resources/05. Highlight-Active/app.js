function focused() {
    let inputFields = document.getElementsByTagName('input');

    for (const input of inputFields) {
        input.addEventListener('focus',inputFocus)
        input.addEventListener('blur',inputBlur)  
    }

    function inputFocus(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.className= 'focused'
    }
    function inputBlur(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.className = ''
    }
} 