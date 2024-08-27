import $ from 'jquery';

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');

let currentSlide = 0;

setInterval(() => {
  // hide all the slides
  sliderItems.forEach((item) => item.style.display = 'none');
  
  // move to next slide
  currentSlide = (currentSlide + 1) % sliderItems.length;

  // display current slide
  sliderItems[currentSlide].style.display = 'block';
}, 3000);

function nextSlide(){
currentSlide= currentSlide+1;
sliderItems.forEach((item) => item.style.display = 'none');
sliderItems[currentSlide].style.display = 'block';
}