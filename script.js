const slideImgs = document.querySelectorAll(".slide--img");
const slideTexts = document.querySelectorAll(".slide--text");
const btnNext = document.querySelector(".slide--btn--right");
const btnPrev = document.querySelector(".slide--btn--left");
const nav = document.querySelector(".nav");
const btnMobile = document.querySelector('.btn--mobile--nav')
let currentSlide = 0;
let maxslide = slideTexts.length - 1;

gotoSlide(0);
function gotoSlide(slide) {
  slideTexts.forEach((slideText, i) => {
    slideText.style.transform = `translateX(${100 * (i - slide)}%)`;

    if (slideText.style.transform !== "translateX(0%)")
      slideText.style.opacity = "0";
    else slideText.style.opacity = "1";
  });
  slideImgs.forEach((slideImg, i) => {
    slideImg.style.transform = `translateX(${-100 * (i - slide)}%)`;

    if (slideImg.style.transform !== "translateX(0%)")
      slideImg.style.opacity = "0";
    else slideImg.style.opacity = "1";
  });
}

btnNext.addEventListener("click", () => {
  if (currentSlide === maxslide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  gotoSlide(currentSlide);
});
btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxslide;
  } else {
    currentSlide--;
  }
  gotoSlide(currentSlide);
});

btnMobile.addEventListener('click', ()=>{
  nav.classList.toggle('nav--open');
})
