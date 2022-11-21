let image = document.querySelectorAll('.slider__img');
let current = 0

function slider() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.add('opacity');
  }
  image[current].classList.remove('opacity');

}

document.querySelector('.slider__button_up').onclick = function () {

  if (current - 1 == -1) {
    current = image.length - 1;
  } else {
    current--;
  }
  slider();
};
document.querySelector('.slider__button_down').onclick = function () {

  if (current + 1 == image.length) {
    current = 0;
  } else {
    current++;
  }
  slider();
};