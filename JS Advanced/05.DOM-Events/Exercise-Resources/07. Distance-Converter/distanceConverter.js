function attachEventsListeners() {
  let button = document.querySelector("#convert");
  button.addEventListener("click", convert);

  function convert(e) {
    let inputDistance = Number(document.getElementById("inputDistance").value);
    let outputDistance = document.getElementById("outputDistance");

    let selectValue = document.querySelectorAll("#inputUnits")[0].value
    let outputUnitsValue = document.querySelectorAll("#outputUnits")[0].value 
    let inputToM = 0;
    let result = 0;
    switch (selectValue){
        case 'km':
          inputToM = inputDistance * 1000;
          break;
        case 'm':
          inputToM = inputDistance;
          break;
        case 'cm':
          inputToM = inputDistance * 0.01;
          break;
        case 'mm':
          inputToM = inputDistance * 0.001;
          break;
        case 'mi':
          inputToM = inputDistance * 1609.34;
          break;
        case 'yrd':
          inputToM = inputDistance * 0.9144;
          break;
        case 'ft':
          inputToM = inputDistance * 0.3048;
          break;
        case 'in':
          inputToM = inputDistance * 0.0254;
          break;
      }
  
      switch (outputUnitsValue){
        case 'km':
          result = inputToM / 1000;
          break;
        case 'm':
          result = inputToM;
          break;
        case 'cm':
          result = inputToM / 0.01;
          break;
        case 'mm':
          result = inputToM / 0.001;
          break;
        case 'mi':
          result = inputToM / 1609.34;
          break;
        case 'yrd':
          result = inputToM / 0.9144;
          break;
        case 'ft':
          result = inputToM / 0.3048;
          break;
        case 'in':
          result = inputToM / 0.0254;
          break;
      }
      outputDistance.value = result;
    }
  }