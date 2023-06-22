let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let caraKalkulasi = document.getElementById("cara-kalkulasi");
let form = document.querySelector(".submit-button");
let reset = document.querySelector(".reset-button");

celcius.oninput = () => {
        let output = (parseFloat(celcius.value) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(output.toFixed(2));
        caraKalkulasi.value =
        celcius.value + "°C * (9/5) + 32 = " + output.toFixed(2) + "°F";
};

fahrenheit.oninput = () => {
      let output = parseFloat((fahrenheit.value) - 32) * 5/9;
      celcius.value = parseFloat(output.toFixed(2));
      caraKalkulasi.value = ('('+fahrenheit.value + ' °F - 32) * 5/9 = ' + output.toFixed(2)+ '°C');
};

reset.addEventListener("click", () => {
  celcius.value = "";
  fahrenheit.value = "";
  caraKalkulasi.value = "";
});


