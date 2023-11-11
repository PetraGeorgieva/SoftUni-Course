function solve() {
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let nextStop = "depot";
  let stopName = "";
  let stopText = document.querySelector(".info");
  async function depart() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
      );
      const data = await response.json();

      stopName = data.name;
      nextStop = data.next;
      stopText.textContent = `Next stop ${stopName}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (err) {
      stopText.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  async function arrive() {
      stopText.textContent = `Arriving at ${stopName}`;
      departBtn.disabled = false;
      arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
