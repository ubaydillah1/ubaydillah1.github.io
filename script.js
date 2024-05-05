// hamburger button
const hamburger = document.querySelector(".hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarButton = document.querySelector(".navbar-button");
const faqs = document.querySelectorAll(".faq");

hamburger.addEventListener("click", function () {
  navbarMenu.classList.toggle("toggle-nav");
  navbarButton.classList.toggle("toggle-nav");
});
// end hamburher

// faq
faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
// end faq

// slider and pagination
const sliderList = document.querySelector(".slider-list");
const leftArrow = document.querySelector("#prev-slide");
const rightArrow = document.querySelector("#next-slide");
const indicatorParents = document.querySelector(".slider-thumb");

let containerSliderIndex = 0;
let autoSlideInterval = null;
let autoSlideActive = true;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    containerSliderIndex =
      containerSliderIndex < 3 ? containerSliderIndex + 1 : 0;
    changeSlide(containerSliderIndex);
  }, 2000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function changeSlide(index) {
  document.querySelector(".selected").classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
  sliderList.style.transform = "translate(" + index * -25 + "%)";
  containerSliderIndex = index;
}

function handleIndicatorClick(e, i) {
  document.querySelector(".selected").classList.remove("selected");
  e.classList.add("selected");
  sliderList.style.transform = "translate(" + i * -25 + "%)";
  containerSliderIndex = i;
  if (autoSlideActive) {
    stopAutoSlide();
    startAutoSlide();
  }
}

document.querySelectorAll(".slider-thumb .bar").forEach(function (e, i) {
  e.addEventListener("click", function () {
    handleIndicatorClick(e, i);
  });
});

rightArrow.addEventListener("click", () => {
  stopAutoSlide();
  containerSliderIndex =
    containerSliderIndex < 3 ? containerSliderIndex + 1 : 0;
  changeSlide(containerSliderIndex);
  startAutoSlide();
});

leftArrow.addEventListener("click", () => {
  stopAutoSlide();
  containerSliderIndex =
    containerSliderIndex > 0 ? containerSliderIndex - 1 : 3;
  changeSlide(containerSliderIndex);
  startAutoSlide();
});

startAutoSlide();
// end slider

// Animation Trigger
gsap.registerPlugin(ScrollTrigger);

// hero
gsap.to(".to-top-hero", {
  scrollTrigger: {
    trigger: ".to-top-hero",
    start: "top 80%",
    end: "bottom top",
  },
  y: 0,
  duration: 1,
  opacity: 1,
  stagger: 0.3,
});

gsap.to(".to-rotate", {
  rotation: 120,
  duration: 1,
  zIndex: -999,
  scale: 1,
  scrollTrigger: {
    trigger: ".to-rotate",
    start: "top 80%",
    end: "bottom top",
  },
});

// business section
gsap.to(".business-section", {
  scrollTrigger: ".business-section",
  y: 0,
  opacity: 1,
});

gsap.to(".to-top-business", {
  scrollTrigger: ".to-top-business",
  y: 0,
  duration: 0.5,
  opacity: 1,
  stagger: {
    each: 0.5,
  },
});

gsap.to(".to-top-container-frame", {
  scrollTrigger: ".to-top-container-frame",
  y: 0,
  duration: 0.5,
  opacity: 1,
  stagger: {
    each: 0.2,
  },
});

// mobile section
gsap.to(".to-top-mobile-section", {
  scrollTrigger: ".to-top-mobile-section",
  y: 0,
  duration: 0.5,
  opacity: 1,
  stagger: {
    each: 0.3,
  },
});

gsap.to(".mastercard-container", {
  scrollTrigger: ".mastercard-container",
  y: 0,
  duration: 0.6,
  opacity: 1,
});

gsap.to(".mastercard-content-top", {
  scrollTrigger: ".mastercard-content-top",
  y: 0,
  duration: 0.6,
  opacity: 1,
});

gsap.to(".mastercard-content-bottom", {
  scrollTrigger: ".mastercard-content-top",
  y: 0,
  duration: 0.6,
  opacity: 1,
  delay: 0.6,
});

document.querySelectorAll(".to-top").forEach((top, index) => {
  gsap.to(top, {
    y: 0,
    duration: 0.6,
    opacity: 1,
    scrollTrigger: {
      trigger: top,
    },
  });
});

document.querySelectorAll(".to-left").forEach((left, index) => {
  gsap.to(left, {
    x: 0,
    duration: 0.9,
    opacity: 1,
    scrollTrigger: {
      trigger: left,
    },
  });
});
