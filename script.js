// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menu.classList.toggle("make-arrow");
});
// End of Navbar

// Section 2 Video
const video = document.querySelector(".video");
const videoControlBtn = document.querySelector(".video-control-buttons i");
const videoBar = document.querySelector(".video-bar");

function playPause() {
  if (video.paused) {
    video.play();
    videoControlBtn.className = "far fa-pause-circle";
    video.style.opacity = 0.7;
  } else {
    video.pause();
    videoControlBtn.className = "far fa-play-circle";
    video.style.opacity = 0.3;
  }
}

function colorVideoBar() {
  const barLength = video.currentTime / video.duration;
  videoBar.style.width = `${barLength * 100}%`;
  if (video.ended) {
    videoControlBtn.className = "far fa-play-circle";
    video.style.opacity = 0.3;
  }
}

videoControlBtn.addEventListener("click", playPause);

video.addEventListener("timeupdate", colorVideoBar);

// End of Section 2 Video

// Section 3 Price Cards Swiper

// when 'effect: "coverflow" ' is used, only two elements (first and last cards) are clickable,
// so it's good for photos, but not good for cards with buttons ('add to cart', 'choose plan' etc)
// if we want all our cards to be clickable, we need to use other effects (see slider.com)

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// End of Section 3 Price Cards Swiper
