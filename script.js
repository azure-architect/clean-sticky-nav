console.log('app loaded. ');
const offCanvas = document.querySelector('.offCanvas');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

hamburger.addEventListener('click', () => {
  offCanvas.classList.toggle('active');
});
