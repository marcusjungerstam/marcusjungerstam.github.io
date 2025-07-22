const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
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
}

// Click anywhere to go to next slide
document.querySelector(".click-catcher").addEventListener("click", () => {
  const active = slides[current];

  // Only allow manual skip if current is NOT an actively playing video
  //if (active.tagName === "VIDEO" && !active.ended) return;

  current = (current + 1) % slides.length;
  showSlide(current);
});

// Initialize
showSlide(current);
