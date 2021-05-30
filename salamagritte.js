function DelayloadingImages() {
  var imgDiv1 = document.getElementById("imagen1");
  var imgDiv2 = document.getElementById("imagen2");
  var imgDiv3 = document.getElementById("imagen3");
  var imgDiv4 = document.getElementById("imagen4");
  var imgDiv5 = document.getElementById("imagen5");
  var imgDiv6 = document.getElementById("imagen6");
  imgDiv1.innerHTML = "<img class='img' src='magritte/1-1.jpeg' />";
  imgDiv2.innerHTML = "<img class='img' src='magritte/2-1.jpeg' />";
  imgDiv3.innerHTML = "<img class='img' src='magritte/3-1.jpeg' />";
  imgDiv4.innerHTML = "<img class='img' src='magritte/4-1.jpeg' />";
  imgDiv5.innerHTML = "<img class='img' src='magritte/5-1.jpeg' />";
  imgDiv6.innerHTML = "<img class='img' src='magritte/6-1.jpeg' />";
}
setTimeout("DelayloadingImages()", 3000);

function DelayloadingImages2() {
  var imgDiv1 = document.getElementById("imagen1");
  var imgDiv2 = document.getElementById("imagen2");
  var imgDiv3 = document.getElementById("imagen3");
  var imgDiv4 = document.getElementById("imagen4");
  var imgDiv5 = document.getElementById("imagen5");
  var imgDiv6 = document.getElementById("imagen6");
  imgDiv1.innerHTML = "<img class='img' src='magritte/1-2.jpeg' />";
  imgDiv2.innerHTML = "<img class='img' src='magritte/2-2.jpeg' />";
  imgDiv3.innerHTML = "<img class='img' src='magritte/3-2.jpeg' />";
  imgDiv4.innerHTML = "<img class='img' src='magritte/4-2.jpeg' />";
  imgDiv5.innerHTML = "<img class='img' src='magritte/5-2.jpeg' />";
  imgDiv6.innerHTML = "<img class='img' src='magritte/6-2.jpeg' />";
}
setTimeout("DelayloadingImages2()", 6000);
