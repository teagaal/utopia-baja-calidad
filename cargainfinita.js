var consumo = 0;
var consumoPorSegundo = 0.0351;
var contador = document.getElementById("contador-co2");

setInterval(function () {
  if (contador) {
    contador.innerHTML = `Ya gasté ${consumo} MB en datos`;
    consumo = consumo + consumoPorSegundo;
  }
}, 1000);
