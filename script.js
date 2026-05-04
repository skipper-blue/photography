document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
window.addEventListener('scroll', () => {
  const topbar = document.querySelector('.topbar');
  if (topbar) topbar.style.boxShadow = window.scrollY > 20 ? '0 10px 30px rgba(0,0,0,.35)' : 'none';
});

function animateCounter(id, target, duration) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = Math.floor(start);
    if (start >= target) {
      el.textContent = target;
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

function updateMenuIcon(isOpen) {
  const button = document.querySelector('.menu-toggle');
  if (!button) return;
  button.innerText = isOpen ? '✕' : '☰';
  button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}

function openMenu() {
  const navMobile = document.getElementById('navMobile');
  const backdrop = document.getElementById('navBackdrop');
  if (!navMobile || !backdrop) return;
  navMobile.classList.add('active');
  backdrop.classList.add('active');
  document.body.classList.add('nav-open');
  updateMenuIcon(true);
}

function closeMenu() {
  const navMobile = document.getElementById('navMobile');
  const backdrop = document.getElementById('navBackdrop');
  if (!navMobile || !backdrop) return;
  navMobile.classList.remove('active');
  backdrop.classList.remove('active');
  document.body.classList.remove('nav-open');
  updateMenuIcon(false);
}

function toggleMenu() {
  const navMobile = document.getElementById('navMobile');
  if (navMobile && navMobile.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  updateMenuIcon(false); // Initialize the menu icon
});