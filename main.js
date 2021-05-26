var imgDiv1 = document.getElementById("imagen1");
var imgDiv2 = document.getElementById("imagen2");
var imgDiv3 = document.getElementById("imagen3");
var imgDiv4 = document.getElementById("imagen4");
var imgDiv5 = document.getElementById("imagen5");
var imgDiv6 = document.getElementById("imagen6");

function DelayloadingImages() {
  if (imgDiv1) {
    imgDiv1.innerHTML = "<img class='img' src='/magritte/1-1.jpeg' />";
    imgDiv2.innerHTML = "<img class='img' src='/magritte/2-1.jpeg' />";
    imgDiv3.innerHTML = "<img class='img' src='/magritte/3-1.jpeg' />";
    imgDiv4.innerHTML = "<img class='img' src='/magritte/4-1.jpeg' />";
    imgDiv5.innerHTML = "<img class='img' src='/magritte/5-1.jpeg' />";
    imgDiv6.innerHTML = "<img class='img' src='/magritte/6-1.jpeg' />";
  }
}
setTimeout("DelayloadingImages()", 3000);

function DelayloadingImages2() {
  if (imgDiv1) {
    imgDiv1.innerHTML = "<img class='img' src='/magritte/1-2.jpeg' />";
    imgDiv2.innerHTML = "<img class='img' src='/magritte/2-2.jpeg' />";
    imgDiv3.innerHTML = "<img class='img' src='/magritte/3-2.jpeg' />";
    imgDiv4.innerHTML = "<img class='img' src='/magritte/4-2.jpeg' />";
    imgDiv5.innerHTML = "<img class='img' src='/magritte/5-2.jpeg' />";
    imgDiv6.innerHTML = "<img class='img' src='/magritte/6-2.jpeg' />";
  }
}
setTimeout("DelayloadingImages2()", 6000);

function ShowPopUp() {
  var popup = document.getElementById("popupid");
  popup.classList.remove("hidden");
}

setTimeout("ShowPopUp()", 7000);

var consumo = 0;
var consumoPorSegundo = 0.0351;
var contador = document.getElementById("contador-co2");

setInterval(function () {
  if (contador) {
    contador.innerHTML = `Ya gasté ${consumo} MB en datos`;
    consumo = consumo + consumoPorSegundo;
  }
}, 1000);

var video = document.getElementById("video-normal");
if (video) {
  video.addEventListener("mousemove", function pausar() {
    video.pause();
    video.load();
  });
}
