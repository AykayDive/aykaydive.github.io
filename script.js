const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.filter').addEventListener('click', () => {
  document.querySelectorAll('.video-card').forEach(card => {
    card.style.display = 'block';
  });
});

// Small interactive touch: cards tilt subtly on desktop.
if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(700px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}
