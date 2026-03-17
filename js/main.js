// main.js

// Custom Cursor
const cursorRing = document.getElementById('cursor-ring');
const cursorDot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', e => {
  cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(45deg)`;
  cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Dark/Light Mode
let darkMode = true;
function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle('light-theme', !darkMode);
}

// Hero Name Glitch Animation handled by CSS

// Skill Bar Animation
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-bar-fill').forEach(el => {
    const fill = el.dataset.fill;
    el.style.width = fill;
  });
});

// CV Download
function triggerCVDownload() {
  const link = document.createElement('a');
  link.href = 'assets/Musah_CV.pdf';
  link.download = 'Musah_CV.pdf';
  link.click();
}

// Project Filter
const filters = document.querySelectorAll('.flt');
const projects = document.querySelectorAll('.proj-card');
filters.forEach(flt => {
  flt.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('on'));
    flt.classList.add('on');
    const filter = flt.dataset.filter;
    projects.forEach(p => {
      if(filter === 'all' || p.dataset.status === filter) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });
  });
});

// Matrix Background
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = canvas.width / 20;
const ypos = Array(Math.floor(cols)).fill(0);
function matrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#00ffe7';
  ypos.forEach((y,i) => {
    ctx.fillText('01', i*20, y);
    ypos[i] = y > canvas.height + Math.random()*10000 ? 0 : y + 20;
  });
}
setInterval(matrix, 50);
