// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Nav scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Scroll reveal ──
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
revealElements.forEach((el) => observer.observe(el));

// ── Add reveal class to animated elements on load ──
document.querySelectorAll('.work-card, .skill-card, #about, #testimonials .grid > div').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ── Dark mode toggle ──
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Read stored preference
let theme = 'light';
try {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    theme = stored;
  }
} catch (e) {}

html.setAttribute('data-theme', theme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});


// ── Initialize Lucide icons ──
lucide.createIcons();
