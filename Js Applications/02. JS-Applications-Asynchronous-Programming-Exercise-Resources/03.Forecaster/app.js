/* const response = await fetch(
    `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
  );
  const data = await response.json();

  */

function attachEvents() {
  let inputLocation = document.getElementById("location");
  let divForecast = document.getElementById("forecast"); //display:none
  let currentDiv = document.querySelector("#current");
  let upcomingDiv = document.querySelector("#upcoming");
  const btnSubmit = document.getElementById("submit");

  btnSubmit.addEventListener("click", submitIt);
  let codeToSearch = "";

  async function submitIt() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/forecaster/locations`
      );
      const data = await response.json();

      data.forEach((el) => {
        if (el.name == inputLocation.value) {
          codeToSearch = el.code;
        }
      });
    } catch (err) {
      console.log("Error");
    }

    try {
      const secondResponse = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${codeToSearch}`
      );
      const secondData = await secondResponse.json();
      divForecast.style.display = "block";
      let divOne = document.createElement("div");
      divOne.className = "forecasts";

      let spanConditionSymbol = document.createElement("span");
      spanConditionSymbol.className = "condition symbol";
      switch (secondData.forecast.condition) {
        case "Sunny":
          spanConditionSymbol.innerHTML = "&#x2600";
          break;
        case "Partly sunny":
          spanConditionSymbol.innerHTML = "&#x26C5";
          break;
        case "Overcast":
          spanConditionSymbol.innerHTML = "&#x2601";
          break;
        case "Rain":
          spanConditionSymbol.innerHTML = "&#x2614";
          break;
      }

      let spanCondition = document.createElement("span");
      spanCondition.className = "condition";

      let spanInfo1 = document.createElement("span");
      spanInfo1.className = "forecast-data";
      spanInfo1.textContent = secondData.name;

      let spanInfo2 = document.createElement("span");
      spanInfo2.className = "forecast-data";

      spanInfo2.innerHTML = `${secondData.forecast.low}&#176/${secondData.forecast.high}&#176`;
      let spanInfo3 = document.createElement("span");
      spanInfo3.className = "forecast-data";

      spanInfo3.textContent = secondData.forecast.condition;
      spanCondition.appendChild(spanInfo1);
      spanCondition.appendChild(spanInfo2);
      spanCondition.appendChild(spanInfo3);
      divOne.appendChild(spanConditionSymbol);
      divOne.appendChild(spanCondition);
      currentDiv.appendChild(divOne);
    } catch (err) {
      let errorP = document.createElement("p");
      errorP.textContent = "Error";
      divForecast.appendChild(errorP);
      divForecast.style.display = "block";
      currentDiv.style.display = "none";
      upcomingDiv.style.display = "none";
    }

    const thirdResponse = await fetch(
      `http://localhost:3030/jsonstore/forecaster/upcoming/${codeToSearch}`
    );
    const thirdData = await thirdResponse.json();
    let divTwo = document.createElement("div");
    divTwo.className = "forecast-info";

    thirdData.forecast.forEach((el) => {
      let spanUpcoming = document.createElement("span");
      spanUpcoming.className = "upcoming";
      let spanConditionSymbol = document.createElement("span");
      spanConditionSymbol.className = "symbol";
      switch (el.condition) {
        case "Sunny":
          spanConditionSymbol.innerHTML = "&#x2600";
          break;
        case "Partly sunny":
          spanConditionSymbol.innerHTML = "&#x26C5";
          break;
        case "Overcast":
          spanConditionSymbol.innerHTML = "&#x2601";
          break;
        case "Rain":
          spanConditionSymbol.innerHTML = "&#x2614";
          break;
      }

      let spanInfo1 = document.createElement("span");
      spanInfo1.className = "forecast-data";
      spanInfo1.innerHTML = `${el.low}&#176/${el.high}&#176`;

      let spanInfo2 = document.createElement("span");
      spanInfo2.className = "forecast-data";
      spanInfo2.textContent = el.condition;

      spanUpcoming.appendChild(spanConditionSymbol);
      spanUpcoming.appendChild(spanInfo1);
      spanUpcoming.appendChild(spanInfo2);

      divTwo.appendChild(spanUpcoming);
      upcomingDiv.appendChild(divTwo);
      divForecast.style.display = "block";
    });
  }
}

attachEvents();
