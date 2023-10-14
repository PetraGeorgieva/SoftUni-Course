function notify(message) {
  let divNotification = document.getElementById("notification");
  divNotification.textContent = message;
  divNotification.style.display = "block";

  divNotification.addEventListener("click", hideIt);

  function hideIt() {
    divNotification.style.display = "none";
  }
}
