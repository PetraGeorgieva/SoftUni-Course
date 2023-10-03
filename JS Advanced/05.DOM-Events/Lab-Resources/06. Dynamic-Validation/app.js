function validate() {
    const inputEl = document.getElementById('email');
    const reg = new RegExp("[a-z]+@[a-z]+.[a-z]+");
    inputEl.addEventListener('change',validate);
   function validate (e){
    if(reg.test(inputEl.value)){
       inputEl.className = ''
    }else{
        inputEl.className = 'error';
    }
   }
}