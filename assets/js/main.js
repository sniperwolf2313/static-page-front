// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle del menú móvil
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú al hacer clic en un enlace
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Realce de enlace activo según el scroll
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const byId = id => navLinks.find(a => a.getAttribute('href') === `#${id}`);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => a.classList.remove('active'));
      const active = byId(id);
      if (active) active.classList.add('active');
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px', // activa más o menos centrado
  threshold: 0
});

sections.forEach(sec => observer.observe(sec));

// Demo: manejo de formulario (evita envío real)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nombre = data.get('nombre') || '👋';
    alert(`¡Gracias, ${nombre}! Hemos recibido tu mensaje (demo).`);
    form.reset();
  });
}
