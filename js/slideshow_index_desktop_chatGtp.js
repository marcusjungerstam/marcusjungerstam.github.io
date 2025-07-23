const videoSources = [
  "videos/BonzaidragonDD/intro.mp4",
  "img/project_100/14.mp4",
  "videos/ancient_tumble/intro.mp4",
];

const imageSources = [
  "img/index/landscape/img_1.png",
  "img/index/landscape/img_2.png",
  "img/index/landscape/img_3.png",
  "img/index/landscape/img_4.png",
  "img/index/landscape/img_5.png",
  "img/index/landscape/img_6.png",
  "img/index/landscape/img_7.png",
  "img/index/landscape/img_8.png",
  "img/index/landscape/img_9.png",
  "img/index/landscape/img_10.png",
  "img/index/landscape/img_11.png",
];


const isMobile = window.innerWidth <= 768 || window.innerHeight <= 500;

const carousel = document.querySelector(".carousel");
const clickCatcher = carousel.querySelector(".click-catcher");

let slides = [];
let current = 0;
let imageTimer = null;

function createSlide(src, type) {
  const el = document.createElement(type);
  el.className = "slide";
  el.src = src;

  if (type === "video") {
    el.muted = true;
    el.playsInline = true;
    el.setAttribute("autoplay", "");
  }

  carousel.insertBefore(el, clickCatcher);
  return el;
}

function setupSlides() {
  const sources = isMobile ? imageSources : videoSources;
  const type = isMobile ? "img" : "video";

  sources.forEach((src) => {
    const slide = createSlide(src, type);
    slides.push(slide);
  });

  showSlide(current);
}

function showSlide(index) {
  clearTimeout(imageTimer); // Clear previous image timer

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);

    if (slide.tagName === "VIDEO") {
      slide.pause();
      slide.currentTime = 0;
      slide.loop = false;

      if (i === index) {
        slide.play();
        slide.onended = () => {
          current = (current + 1) % slides.length;
          showSlide(current);
        };
      } else {
        slide.onended = null;
      }
    }
  });

  // For images: auto-switch after 3 seconds
  if (slides[index].tagName === "IMG") {
    imageTimer = setTimeout(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  }
}

clickCatcher.addEventListener("click", () => {
  const active = slides[current];

  // Only block click if video is still playing
  if (active.tagName === "VIDEO" && !active.ended) return;

  current = (current + 1) % slides.length;
  showSlide(current);
});

setupSlides();
