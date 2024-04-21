// hamburger button
const hamburger = document.querySelector(".hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarButton = document.querySelector(".navbar-button");
const faqs = document.querySelectorAll(".faq");

hamburger.addEventListener("click", function () {
  navbarMenu.classList.toggle("toggle-nav");
  navbarButton.classList.toggle("toggle-nav");
});

faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// slider
const slideList = document.querySelector(".slider-list");
const slideButtons = document.querySelectorAll(".slide-button");
const containerSlider = document.querySelectorAll(".container-slider");
const reviewSlider = document.querySelector(".review-slider");
let maxScrollLeft = slideList.scrollWidth - slideList.clientWidth;
window.addEventListener("resize", () => {
  maxScrollLeft = slideList.scrollWidth - slideList.clientWidth;
});

let isAnimating = false;

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = slideList.clientWidth * direction;

    reviewSlider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      isAnimating = false;
    }, 700);

    if (reviewSlider.scrollLeft === maxScrollLeft && direction === 1) {
      reviewSlider.scrollBy({
        left: -scrollAmount * containerSlider.length,
        behavior: "smooth",
      });
    } else if (reviewSlider.scrollLeft === 0 && direction === -1) {
      reviewSlider.scrollBy({
        left: Math.abs(scrollAmount * containerSlider.length),
        behavior: "smooth",
      });
    }
  });
});

const handleSlideButtons = () => {
  slideButtons[0].style.display = slideList.scrollLeft <= 0 ? "none" : "block";
  slideButtons[1].style.display =
    slideList.scrollLeft >= maxScrollLeft ? "none" : "block";
};

slideList.addEventListener("scroll", () => {
  handleSlideButtons();
});

function autoScrollLeft() {
  if (isAnimating) return;
  isAnimating = true;

  const scrollAmount = slideList.clientWidth; // Jarak yang akan discroll
  const direction = -1; // Arah scroll (ke kiri)

  reviewSlider.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth",
  });

  setTimeout(() => {
    isAnimating = false;
  }, 700);

  if (reviewSlider.scrollLeft === 0 && direction === -1) {
    reviewSlider.scrollBy({
      left: Math.abs(scrollAmount * containerSlider.length),
      behavior: "smooth",
    });
  }
}

setInterval(autoScrollLeft, 1000);
