var video = document.getElementById("video-normal");
if (video) {
  video.addEventListener("mousemove", function pausar() {
    video.pause();
    video.load();
  });
}
