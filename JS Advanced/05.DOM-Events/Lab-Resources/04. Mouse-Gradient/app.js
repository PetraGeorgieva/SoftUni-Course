function attachGradientEvents() {
  const  box = document.getElementById("gradient");
  box.addEventListener('mousemove',gradientMove);
  box.addEventListener('mouseout',gradientOut);
  function gradientMove(event) {
    const gradientBoxWidth = event.target.clientWidth;
    const positionOfTheMouse = event.offsetX/ (gradientBoxWidth-1);
    const percentage = Math.trunc(positionOfTheMouse*100);
    document.getElementById("result").textContent = percentage +"%";
  }
  function gradientOut() {
    document.getElementById("result").textContent = "";
  } 

}