Reveal.initialize();

// Video Masks
const videoMask1 = document.getElementById("video-mask1");
const videoMask2 = document.getElementById("video-mask2");
const videoMask3 = document.getElementById("video-mask3");
const videoMask4 = document.getElementById("video-mask4");
const videoMask5 = document.getElementById("video-mask5");

// Videos
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");

videoMask1.addEventListener("click", () => {
  video1.style.display = "block";
  video1.play();
});

videoMask2.addEventListener("click", () => {
  video2.style.display = "block";
  video2.play();
});

videoMask3.addEventListener("click", () => {
  video3.style.display = "block";
  video3.play();
});

videoMask4.addEventListener("click", () => {
  video4.style.display = "block";
  video4.play();
});

videoMask5.addEventListener("click", () => {
  video5.style.display = "block";
  video5.play();
});
