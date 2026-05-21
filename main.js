/* =========================
   NAVIGATION
========================= */
let current = 'home';
let prev = null;

function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  prev = current;
  current = page;

  if (page === 'profile') triggerSkillBars();
  if (page === 'projects') renderAllProjects();
}

/* =========================
   SKILLS
========================= */
const SKILLS = {
  frontend: [
    { n: 'HTML/CSS', c: 'cyan' },
    { n: 'JavaScript', c: 'cyan' },
    { n: 'React', c: 'cyan' }
  ],
  backend: [
    { n: 'Python', c: 'amber' },
    { n: 'FastAPI', c: 'amber' },
    { n: 'Node.js', c: 'amber' }
  ],
  mobile: [
    { n: 'IoT Systems', c: 'green' },
    { n: 'ESP32', c: 'green' },
    { n: 'Arduino', c: 'green' }
  ],
  ml: [
    { n: 'TensorFlow Lite', c: 'purple' },
    { n: 'OpenAI API', c: 'purple' }
  ]
};

const PROF_SKILLS = [
  { n: 'IoT Systems', p: 90 },
  { n: 'Embedded Design', p: 88 },
  { n: 'AI Integration', p: 75 }
];

/* =========================
   PROJECTS
========================= */
const PROJECTS = [
  {
    id: 'p1',
    field: 'ml',
    status: 'ongoing',
    progress: 65,
    title: 'AI Road Condition Monitor',
    desc: 'Detect potholes using IoT sensors + ML models.',
    tags: ['IoT', 'ML', 'ESP32'],
    started: '2025',
    overview: 'Road condition monitoring using sensor fusion and AI.',
    objectives: ['Collect data', 'Train model', 'Deploy system'],
    approach: 'Embedded data + cloud ML pipeline',
    milestones: [
      { t: 'Sensors', d: 'IMU setup', date: '2025', s: 'done' }
    ],
    info: { Domain: 'IoT + AI', Stack: 'Python + ESP32' },
    github: ''
  },
  {
    id: 'p2',
    field: 'frontend',
    status: 'ongoing',
    progress: 80,
    title: 'EV Telematics System',
    desc: 'Vehicle tracking + CAN data logging system.',
    tags: ['CAN Bus', 'IoT'],
    started: '2025',
    overview: 'Fleet monitoring system for EV buses.',
    objectives: ['Read CAN data', 'Transmit telemetry'],
    approach: 'IoT + cloud dashboard',
    milestones: [],
    info: { Domain: 'Automotive IoT', Stack: 'NodeMCU + SIM800L' },
    github: ''
  }
];

/* =========================
   RENDER
========================= */
function buildCard(p) {
  return `
    <div class="p-card" onclick="go('detail'); loadDetail('${p.id}')">
      <div class="p-title">${p.title}</div>
      <div class="p-desc">${p.desc}</div>
    </div>
  `;
}

function renderAllProjects() {
  document.getElementById('allGrid').innerHTML =
    PROJECTS.map(buildCard).join('');
}

function loadDetail(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('d-title').textContent = p.title;
  document.getElementById('d-overview').textContent = p.overview;
  document.getElementById('d-approach').textContent = p.approach;
  document.getElementById('d-objectives').innerHTML =
    p.objectives.map(o => `<li>${o}</li>`).join('');
}

/* =========================
   SKILL BARS
========================= */
function triggerSkillBars() {
  const el = document.getElementById('profSkillBars');
  el.innerHTML = PROF_SKILLS.map(s =>
    `<div>${s.n} - ${s.p}%</div>`
  ).join('');
}

/* =========================
   INIT
========================= */
renderAllProjects();
go('home');
