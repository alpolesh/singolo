//Navigation
const navigationHeader = document.getElementById('navigationHeader');
navigationHeader.addEventListener('click', (event) => {
  navigationHeader.querySelectorAll('a').forEach(item => item.classList.remove('navigation__link_active'));
  event.target.classList.add('navigation__link_active');
});
//Slider
const left_arrow = document.querySelector(".slider__left-arrow");
const right_arrow = document.querySelector(".slider__right-arrow");
let slides = document.getElementsByClassName("slider__slides");
let slider = document.querySelector(".slider");

let slideIndex = 1;
showSlides(slideIndex);

left_arrow.addEventListener('click', (e) => {
  plusSlides(-1);
});

right_arrow.addEventListener('click', (e) => {
  plusSlides(1);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
    if (slideIndex - 1 == 1){
      slider.classList.add('blue');
    }
    else {
      slider.classList.remove('blue');
    }
}
