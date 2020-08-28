// get elements text
let slideshowText = document.getElementById("slideshowText");
let slidesText = slideshowText.getElementsByTagName("div");
let indexTxt = 0;

// function nextSlide text
function nextSlideText() {
  slidesText[indexTxt].classList.remove("active");
  indexTxt = (indexTxt + 1) % slidesText.length;
  slidesText[indexTxt].classList.add("active");
}

// function preverseSlide text
function prevSlideText() {
  slidesText[indexTxt].classList.remove("active");
  indexTxt = (indexTxt - 1 + slidesText.length) % slidesText.length;
  slidesText[indexTxt].classList.add("active");
}

// get elements image
let slideshow = document.getElementById("slideshow");
let slides = slideshow.getElementsByTagName("img");
let indexImg = 0;

// function nextSlide image
function nextSlide() {
  slides[indexImg].classList.remove("active");
  indexImg = (indexImg + 1) % slides.length;
  slides[indexImg].classList.add("active");
}

// function preverseSlide image
function prevSlide() {
  slides[indexImg].classList.remove("active");
  indexImg = (indexImg - 1 + slides.length) % slides.length;
  slides[indexImg].classList.add("active");
}