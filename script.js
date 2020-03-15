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
  blackScreenHorizontal.classList.remove('screen-on');
  blackScreenVertical.classList.remove('screen-on');
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

//Iphone's screen

let verticalIphoneButton = document.querySelector('.iphone-vertical__button');
let blackScreenVertical = document.querySelector('.slider__black-screen-vertical');

verticalIphoneButton.addEventListener('click', (event) => {
blackScreenVertical.classList.toggle('screen-on');
});

let horizontalIphoneButton = document.querySelector('.iphone-horizontal__button');
let blackScreenHorizontal = document.querySelector('.slider__black-screen-horizontal');

horizontalIphoneButton.addEventListener('click', (event) => {
blackScreenHorizontal.classList.toggle('screen-on');
})

//Portfolio. Switching tabs

let portfolioImages = document.querySelectorAll('.layout-4-column__img');
const tags = document.querySelector('.portfolio__tags');

tags.addEventListener('click', (event) => {
  if(event.target.tagName === "SPAN"){
    tags.querySelectorAll('.tags__tag').forEach(item => item.classList.remove('tag_active'));
    event.target.classList.add('tag_active');
    getRandomImg(portfolioImages);
  }
  return;
});

function getRandomImg(n) {
  for (let i = 0; i < n.length; i++){
    n[i].style.order = Math.floor(Math.random() * Math.floor(n.length));
  }
}

//Portfolio. Image selection

document.querySelector('.layout-4-column').addEventListener('click', (event) => {
  if (event.target.className === "layout-4-column__img"){
    document.querySelectorAll('.layout-4-column__img').forEach(item => item.classList.remove('layout-4-column__img_active'));
    event.target.classList.add('layout-4-column__img_active');
  }
  return;
});

// Form submitting

document.querySelector('.form__submit').addEventListener('click', (event) => {
  event.preventDefault();
  let subject = document.querySelector('.subject').value;
  subject = subject === '' ? "Без темы" : "Тема: " + subject;
  document.querySelector('.modal__subject').innerHTML = '';
  document.querySelector('.modal__subject').innerHTML = subject;
  let description = document.querySelector('.form__textarea').value;
  description = description === '' ? "Без описания" : "Описание: " + description;
  document.querySelector('.modal__description').innerHTML = '';
  document.querySelector('.modal__description').innerHTML = description;
  document.querySelector('.quote__modal').style.display = "";
})

document.querySelector('.modal__footer button').addEventListener('click', (event) => {
  subject = '';
  description = '';
  document.querySelector('.subject').innerHTML = '';
  document.querySelector('.form__textarea').innerHTML = '';
  document.querySelector('.quote__modal').style.display = "none";
})


