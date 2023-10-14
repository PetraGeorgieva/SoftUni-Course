function validate() {
 
    let usernameInput  = document.getElementById("username");
    let usernameRegex = /^[A-Za-z 0-9]{3,20}$/
    let emailInput  = document.getElementById("email");
    let emailRegex = /^.*@.*\..*$/
    let passwordInput  = document.getElementById("password");
    let confirmPasswordInput  = document.getElementById("confirm-password");
    let passwordAndConfirmPasswordRegex = /^[\w]{5,15}$/

    let chexboxInput = document.getElementById('company'); // one@ at least one . ore more;
    
    let fieldset = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber");

    let buttonSubmit = document.getElementById("submit");

    let divValid = document.getElementById("valid");
    let istrue = true;


  chexboxInput.addEventListener('change',checkboxifisCheck)


  function checkboxifisCheck (){
  
    if (chexboxInput.checked === true){
        fieldset.style.display = 'block'
    }else{
        fieldset.style.display = 'none'
    }
  }

  buttonSubmit.addEventListener('click',validation)

  function validation (event){
    event.preventDefault()
//username
   if(!usernameRegex.test(usernameInput.value)){
       istrue = false;
       usernameInput.style = "border-color: red"
   }else{
    usernameInput.style = "border: none"
   }
//email
   if(!emailRegex.test(emailInput.value)){
    istrue = false;
    emailInput.style = "border-color: red"
   }else{
    emailInput.style = "border: none"
   }
    let passwordtTrue = passwordAndConfirmPasswordRegex.test(passwordInput.value)
    let confirmedTrue = passwordAndConfirmPasswordRegex.test(confirmPasswordInput.value)

    //password
   if(!passwordtTrue){
    istrue = false;
        passwordInput.style = "border-color: red"
        confirmPasswordInput.style  = "border-color: red"
    }else {
        passwordInput.style = "border: none"
        confirmPasswordInput.style = "border: none"
   }


    if(passwordtTrue){
        if(passwordInput.value !== confirmPasswordInput.value){
            istrue = false;
            confirmPasswordInput.style = "border-color: red"
            passwordInput.style = "border-color: red"
        }else{
            confirmPasswordInput.style = "border: none"
            passwordInput.style = "border: none"
        }
    }
// checkbox
    
   if(chexboxInput.checked){
    if(Number(companyNumber.value)< 1000 || Number(companyNumber.value) > 9999) {
        istrue = false;
        companyNumber.style = "border-color: red"
    }else{
        companyNumber.style = "border: none"
       }
   }
// final box  
   if(istrue){
    divValid.style.display = 'block';
    
   }else{
    divValid.style.display = 'none';
   }
  }
}
