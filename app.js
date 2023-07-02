var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Cambia la imagen cada 2 segundos

var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Agregar clase "active" a la diapositiva inicial
slides[currentSlide].classList.add('active');
