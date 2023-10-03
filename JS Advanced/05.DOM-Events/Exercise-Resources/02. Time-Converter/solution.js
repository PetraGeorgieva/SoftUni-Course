function attachEventsListeners() {
let inputDay = document.getElementById("days");
let inputHours = document.getElementById("hours");
let inputMinutes= document.getElementById("minutes");
let inputSeconds = document.getElementById("seconds");
let button =document.querySelectorAll("input[type=button]")
for (const btn of button) {
    btn.addEventListener("click",convert)  
}

function convert(e) {
    let field = e.target.parentNode
    let inputField = field.querySelector("label").textContent
    let  inputValue = field.querySelector("input").value
 if(inputField === 'Days: '){
    inputHours.value = Number(inputValue) * 24
    inputMinutes.value = Number(inputValue) * 24 * 60
    inputSeconds.value= Number(inputValue) * 24 * 60 * 60;
 } else if(inputField === 'Hours: '){
    inputDay.value = (Number(inputValue) / 24)
    inputMinutes.value = Number(inputValue)  * 60
    inputSeconds.value= Number(inputValue) * 60 * 60;
 } else  if(inputField === 'Minutes: '){
    inputDay.value = (Number(inputValue) / 60 / 24)
    inputHours.value = Number(inputValue)  / 60
    inputSeconds.value= Number(inputValue) * 60
 } else if(inputField === 'Seconds: '){
    inputDay.value = (Number(inputValue) / 60 / 60 /24)
    inputHours.value = Number(inputValue)  / 60/60
    inputMinutes.value= Number(inputValue) /60
 }

}
}