document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
window.addEventListener('scroll',()=>{document.querySelector('.topbar').style.boxShadow=window.scrollY>20?'0 10px 30px rgba(0,0,0,.35)':'none';});

function animateCounter(id, target, duration) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    document.getElementById(id).textContent = Math.floor(start);
    if (start >= target) {
      document.getElementById(id).textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

window.addEventListener('load', () => {
  animateCounter('counter1', 500, 2000);
  animateCounter('counter2', 10000, 2000);
  animateCounter('counter3', 5, 2000);
});

// Slider
let slideIndex = 0;
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

if (slides) {
  const totalSlides = slides.children.length;
  function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  next.addEventListener('click', () => { slideIndex++; showSlide(slideIndex); });
  prev.addEventListener('click', () => { slideIndex--; showSlide(slideIndex); });
  setInterval(() => { slideIndex++; showSlide(slideIndex); }, 5000);
}

function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('active');
}