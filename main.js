/* ============================================
   DATA — SKILLS
============================================ */
const SKILLS = {
  frontend: [
    { n: 'Python',           c: 'cyan'   },
    { n: 'C / C++',          c: 'cyan'   },
    { n: 'HTML / CSS',       c: 'cyan'   },
    { n: 'JavaScript',       c: 'cyan'   },
    { n: 'React (learning)', c: 'cyan'   },
  ],
  backend: [
    { n: 'Node.js (basic)', c: 'amber' },
    { n: 'REST APIs',       c: 'amber' },
    { n: 'Firebase',        c: 'amber' },
    { n: 'GSM / SIM800L',  c: 'amber' },
    { n: 'MQTT',            c: 'amber' },
  ],
  mobile: [
    { n: 'ESP32',        c: 'green' },
    { n: 'ESP8266',      c: 'green' },
    { n: 'NodeMCU',      c: 'green' },
    { n: 'D1 Mini',      c: 'green' },
    { n: 'Arduino',      c: 'green' },
    { n: 'Firmware Dev', c: 'green' },
  ],
  ml: [
    { n: 'AI Concepts',     c: 'purple' },
    { n: 'Edge Analytics',  c: 'purple' },
    { n: 'Data Monitoring', c: 'purple' },
    { n: 'Sensor Fusion',   c: 'purple' },
    { n: 'TensorFlow Lite', c: 'purple' },
  ],
  devops: [
    { n: 'KiCad PCB Design',   c: 'cyan' },
    { n: 'Circuit Design',     c: 'cyan' },
    { n: 'Prototyping',        c: 'cyan' },
    { n: 'Oscilloscope / DMM', c: 'cyan' },
    { n: 'Technical Docs',     c: 'cyan' },
  ],
  interests: [
    { n: 'Electric Mobility',        c: 'amber'  },
    { n: 'Industrial IoT',           c: 'amber'  },
    { n: 'Smart Energy',             c: 'purple' },
    { n: 'Embedded Hardware',        c: 'green'  },
    { n: 'Wireless Sensor Networks', c: 'green'  },
    { n: 'Telematics',               c: 'cyan'   },
    { n: 'Sustainable Engineering',  c: 'amber'  },
  ],
};

/* ============================================
   DATA — PROFILE SKILL BARS
============================================ */
const PROF_SKILLS = [
  { n: 'Embedded Systems & Firmware', p: 85 },
  { n: 'IoT & Sensor Integration',    p: 82 },
  { n: 'PCB Design (KiCad)',          p: 75 },
  { n: 'Microcontroller Programming', p: 88 },
  { n: 'Power Electronics',           p: 70 },
];

/* ============================================
   DATA — PROJECTS
============================================ */
const PROJECTS = [
  {
    id: 'p1', field: 'ml', status: 'completed', progress: 90,
    title: 'AI-Powered Road Condition Monitoring System',
    desc: 'Smart road monitoring system for detecting potholes using NodeMCU and SIM800L for remote data communication with real-time intelligent reporting.',
    tags: ['NodeMCU', 'SIM800L', 'IoT', 'Python'],
    started: '2024',
    overview: 'A smart road monitoring concept designed for detecting potholes and road surface conditions in real time. The system uses NodeMCU for edge sensing and SIM800L for remote GSM communication, enabling cloud-based infrastructure monitoring relevant to smart cities and transport networks.',
    objectives: [
      'Design real-time sensing pipeline for pothole detection',
      'Integrate NodeMCU with SIM800L for GSM data transmission',
      'Implement intelligent condition-reporting algorithms',
      'Build scalable IoT architecture for smart-city deployment',
      'Document findings for IEEE summit submission',
    ],
    approach: 'The system employs accelerometer-based road sensing fused with GPS coordinates to tag road anomalies. SIM800L transmits structured data packets to a cloud endpoint. The architecture is designed to scale across a fleet of low-cost sensor nodes for city-wide monitoring.',
    milestones: [
      { t: 'Concept & Research',     d: 'Literature review, sensor selection',           date: '2024 Q1', s: 'done' },
      { t: 'Hardware Prototyping',   d: 'NodeMCU + SIM800L circuit assembly',            date: '2024 Q2', s: 'done' },
      { t: 'Firmware Development',   d: 'Sensing & GSM transmission code',               date: '2024 Q2', s: 'done' },
      { t: 'Data Pipeline',          d: 'Cloud endpoint and reporting logic',            date: '2024 Q3', s: 'done' },
      { t: 'IEEE Summit Submission', d: 'Proposal submitted to IEEE African Summit',     date: '2024 Q4', s: 'done' },
    ],
    info: { Domain: 'IoT / AI', Stack: 'NodeMCU · SIM800L · Python', Started: '2024 Q1', Completed: '2024 Q4', Type: 'Embedded / IoT' },
    github: 'https://github.com/nzivommoses', demo: null,
  },
  {
    id: 'p2', field: 'devops', status: 'completed', progress: 85,
    title: 'Smart Solar Tracking System',
    desc: 'Automated solar panel orientation using LDR sensors, servo motors, and D1 Mini with ESP-NOW wireless communication for renewable energy optimisation.',
    tags: ['D1 Mini', 'LDR Sensors', 'Servo Motors', 'ESP-NOW'],
    started: '2023',
    overview: 'A dual-axis solar tracking system that continuously orients a solar panel toward the sun to maximise energy capture. LDR sensors detect light intensity differentials; servo motors execute orientation corrections. ESP-NOW provides low-latency wireless telemetry to the base station.',
    objectives: [
      'Design LDR-based light differential sensing circuit',
      'Implement servo motor control on D1 Mini',
      'Build wireless indoor-outdoor communication link via ESP-NOW',
      'Optimise tracking algorithm for maximum energy yield',
      'Design and prototype PCB layout in KiCad',
    ],
    approach: 'The D1 Mini continuously samples four LDR sensors arranged in quadrants. An error signal drives servo PWM outputs to correct panel azimuth and elevation. ESP-NOW protocol provides low-latency wireless telemetry to the base station without requiring a router.',
    milestones: [
      { t: 'Circuit Design', d: 'LDR array and servo driver schematic',    date: '2023 Q2', s: 'done' },
      { t: 'Firmware',       d: 'Tracking algorithm and PWM control',      date: '2023 Q3', s: 'done' },
      { t: 'Wireless Link',  d: 'ESP-NOW indoor/outdoor comm layer',       date: '2023 Q3', s: 'done' },
      { t: 'PCB Layout',     d: 'KiCad board design and review',           date: '2023 Q4', s: 'done' },
      { t: 'Field Testing',  d: 'Performance benchmarking on rooftop',     date: '2024 Q1', s: 'done' },
    ],
    info: { Domain: 'Embedded / Energy', Stack: 'D1 Mini · LDR · KiCad', Started: '2023 Q2', Completed: '2024 Q1', Type: 'Hardware Project' },
    github: 'https://github.com/nzivommoses', demo: null,
  },
  {
    id: 'p3', field: 'mobile', status: 'completed', progress: 80,
    title: 'Smart Home Automation & Bluetooth Speaker',
    desc: 'ESP32-based home automation with motion detection, light sensing, relay control, and Bluetooth A2DP audio — with KiCad PCB modules for indoor and outdoor installation.',
    tags: ['ESP32', 'Bluetooth', 'Relay', 'PIR Sensor'],
    started: '2023',
    overview: 'A unified smart home system built on the ESP32 platform combining automated lighting (PIR motion + ambient light sensing), relay-switched appliance control, and Bluetooth audio streaming into a single embedded solution. PCB layouts were designed for indoor and outdoor modules.',
    objectives: [
      'Integrate PIR motion and LDR ambient light sensors',
      'Implement relay driver for appliance switching',
      'Configure ESP32 A2DP Bluetooth audio sink',
      'Design modular PCB layout in KiCad',
      'Test full system in residential environment',
    ],
    approach: 'The ESP32 runs FreeRTOS tasks for sensor polling, relay control, and Bluetooth audio concurrently. A rule engine triggers lighting based on motion presence and ambient lux thresholds. The Bluetooth audio stack streams audio from a paired phone to a connected amplifier board.',
    milestones: [
      { t: 'Sensor Integration', d: 'PIR, LDR and relay wiring on breadboard', date: '2023 Q1', s: 'done' },
      { t: 'Bluetooth Audio',    d: 'A2DP sink configuration on ESP32',         date: '2023 Q2', s: 'done' },
      { t: 'Automation Logic',   d: 'Rule engine and threshold calibration',     date: '2023 Q3', s: 'done' },
      { t: 'PCB Design',         d: 'Indoor and outdoor module layouts',         date: '2023 Q4', s: 'done' },
      { t: 'Field Deployment',   d: 'Home environment testing',                  date: '2024 Q1', s: 'done' },
    ],
    info: { Domain: 'Embedded / IoT', Stack: 'ESP32 · Bluetooth · KiCad', Started: '2023 Q1', Completed: '2024 Q1', Type: 'Hardware / Firmware' },
    github: 'https://github.com/nzivommoses', demo: null,
  },
  {
    id: 'p4', field: 'mobile', status: 'ongoing', progress: 55,
    title: 'DIY IoT Bird Drone (Ornithopter)',
    desc: 'Lightweight ornithopter-style drone using recycled materials, ESP-NOW wireless control, and embedded firmware for wing motion and tail stabilisation.',
    tags: ['ESP-NOW', 'ESP32', 'Firmware', 'Servo Control'],
    started: '2024',
    overview: 'An experimental ornithopter-style drone that mimics bird flight using flapping wings built from lightweight recycled materials. ESP-NOW provides low-latency peer-to-peer wireless control without infrastructure. Embedded firmware handles servo-driven wing beats and tail stabilisation.',
    objectives: [
      'Design and fabricate lightweight ornithopter airframe',
      'Implement servo-based wing and tail actuation',
      'Configure ESP-NOW bi-directional control link',
      'Develop stabilisation firmware on ESP32',
      'Conduct tethered and free-flight test sessions',
    ],
    approach: 'The airframe uses carbon-fibre rods and recycled plastic film for minimal weight. Two servos drive the wing crank mechanism; a third controls tail deflection. The ESP32 runs a real-time servo mixer and receives commands from a handheld ESP32 transmitter via ESP-NOW.',
    milestones: [
      { t: 'Airframe Design',   d: 'Structural concept and material selection',  date: '2024 Q1', s: 'done'    },
      { t: 'Wing Mechanism',    d: 'Crank and servo linkage fabrication',        date: '2024 Q2', s: 'done'    },
      { t: 'ESP-NOW Comms',     d: 'Bi-directional wireless control link',       date: '2024 Q3', s: 'current' },
      { t: 'Stabilisation FW', d: 'Real-time servo mixer and telemetry',        date: '2024 Q4', s: 'pending' },
      { t: 'Free-flight Tests', d: 'Outdoor performance evaluation',             date: '2025 Q1', s: 'pending' },
    ],
    info: { Domain: 'Robotics / Drone', Stack: 'ESP32 · ESP-NOW · Servos', Started: '2024 Q1', Target: '2025 Q1', Type: 'Hardware / Robotics' },
    github: 'https://github.com/nzivommoses', demo: null,
  },
];

/* ============================================
   ROUTING
============================================ */
let current  = 'home';
let prev     = null;
let detailId = null;

function go(page, id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  if (page === 'detail' && id) {
    detailId = id;
    loadDetail(id);
    document.getElementById('page-detail').classList.add('active');
  } else {
    document.getElementById('page-' + page).classList.add('active');
  }

  document.querySelectorAll('.nav-links a[data-page]').forEach(a =>
    a.classList.toggle('active', a.dataset.page === page)
  );

  document.getElementById('fab').classList.toggle('show', page !== 'home');

  prev    = current;
  current = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'profile')  triggerSkillBars();
  if (page === 'projects') renderAllProjects();
}

function goBack() {
  if (current === 'detail') go('projects');
  else if (prev && prev !== current) go(prev);
  else go('home');
}

/* ============================================
   MOBILE NAV
============================================ */
function toggleNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

/* ============================================
   SKILLS — TAG CLOUD
============================================ */
function filterSkills(cat, btn) {
  document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const items = cat === 'all' ? Object.values(SKILLS).flat() : (SKILLS[cat] || []);
  const cloud = document.getElementById('tagCloud');
  cloud.innerHTML = '';
  items.forEach(function(s, i) {
    const el = document.createElement('span');
    el.className = 's-tag ' + s.c;
    el.textContent = s.n;
    el.style.animationDelay = (i * 0.035) + 's';
    cloud.appendChild(el);
  });
}

/* ============================================
   SKILL BARS
============================================ */
function buildSkillBars() {
  document.getElementById('profSkillBars').innerHTML = PROF_SKILLS.map(function(s) {
    return (
      '<div class="s-bar">' +
      '<div class="s-bar-hd"><span>' + s.n + '</span><span>' + s.p + '%</span></div>' +
      '<div class="s-bar-track">' +
      '<div class="s-bar-fill" data-p="' + s.p + '" style="width:0%"></div>' +
      '</div></div>'
    );
  }).join('');
}

function triggerSkillBars() {
  buildSkillBars();
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      document.querySelectorAll('.s-bar-fill').forEach(function(el) {
        el.style.width = el.dataset.p + '%';
      });
    });
  });
}

/* ============================================
   PROJECT CARD
============================================ */
function buildCard(p) {
  const fieldLabel = p.field.toUpperCase().replace('ML','ML / AI').replace('DEVOPS','HARDWARE').replace('MOBILE','EMBEDDED').replace('FRONTEND','SOFTWARE').replace('BACKEND','CONNECTIVITY');
  const tagHtml = p.tags.map(function(t) { return '<span class="p-tag">' + t + '</span>'; }).join('');
  return (
    '<div class="p-card" onclick="go(\'detail\',\'' + p.id + '\')">' +
    '<div class="p-status ' + p.status + '">' + (p.status === 'ongoing' ? 'IN PROGRESS' : 'COMPLETED') + '</div>' +
    '<div class="p-title">' + p.title + '</div>' +
    '<div class="p-field">' + fieldLabel + '</div>' +
    '<div class="p-desc">'  + p.desc  + '</div>' +
    '<div class="p-bar"><div class="bar-label"><span>PROGRESS</span><span>' + p.progress + '%</span></div>' +
    '<div class="bar-track"><div class="bar-fill" style="width:' + p.progress + '%"></div></div></div>' +
    '<div class="p-tags">' + tagHtml + '</div>' +
    '<div class="p-footer"><div class="p-date">' + p.started + '</div>' +
    '<div class="p-arrow">Details <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></div>' +
    '</div></div>'
  );
}

function renderOverview() {
  document.getElementById('overviewGrid').innerHTML =
    PROJECTS.filter(function(p) { return p.status === 'ongoing'; }).map(buildCard).join('');
}

/* ============================================
   PROJECTS PAGE
============================================ */
let activeField = 'all';

function renderAllProjects() {
  const fields = ['frontend','backend','mobile','ml','devops'];
  document.getElementById('cnt-all').textContent = PROJECTS.length;
  fields.forEach(function(f) {
    const el = document.getElementById('cnt-' + f);
    if (el) el.textContent = PROJECTS.filter(function(p) { return p.field === f; }).length;
  });
  filterProjects(activeField, document.querySelector('.f-tab.active'));
}

function filterProjects(field, btn) {
  activeField = field;
  document.querySelectorAll('.f-tab').forEach(function(t) { t.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  const shown = field === 'all' ? PROJECTS : PROJECTS.filter(function(p) { return p.field === field; });
  document.getElementById('allGrid').innerHTML = shown.length
    ? shown.map(buildCard).join('')
    : '<div style="color:var(--text-muted);font-family:var(--mono);font-size:0.8rem;padding:2rem 0">No projects in this category yet.</div>';
}

/* ============================================
   PROJECT DETAIL
============================================ */
function loadDetail(id) {
  const p = PROJECTS.find(function(x) { return x.id === id; });
  if (!p) return;

  const fieldLabel = p.field.toUpperCase().replace('ML','ML / AI');

  document.getElementById('d-status').innerHTML =
    '<span class="p-status ' + p.status + '">' + (p.status === 'ongoing' ? 'IN PROGRESS' : 'COMPLETED') + '</span>';
  document.getElementById('d-title').textContent   = p.title;
  document.getElementById('d-field').textContent   = fieldLabel;
  document.getElementById('d-overview').textContent  = p.overview;
  document.getElementById('d-approach').textContent  = p.approach;

  document.getElementById('d-tags').innerHTML =
    p.tags.map(function(t) { return '<span class="p-tag">' + t + '</span>'; }).join('');

  document.getElementById('d-objectives').innerHTML =
    p.objectives.map(function(o) { return '<li>' + o + '</li>'; }).join('');

  document.getElementById('d-pct').textContent = p.progress + '%';
  setTimeout(function() {
    document.getElementById('d-bar').style.width = p.progress + '%';
  }, 300);

  document.getElementById('d-info').innerHTML =
    Object.entries(p.info).map(function(entry) {
      return '<div class="info-row"><span class="info-k">' + entry[0] + '</span><span class="info-v">' + entry[1] + '</span></div>';
    }).join('');

  document.getElementById('d-milestones').innerHTML =
    p.milestones.map(function(m, i) {
      const line = i < p.milestones.length - 1 ? '<div class="ms-line"></div>' : '';
      return (
        '<div class="milestone">' +
        '<div class="ms-col"><div class="ms-dot ' + m.s + '"></div>' + line + '</div>' +
        '<div class="ms-content"><div class="ms-title">' + m.t + '</div>' +
        '<div class="ms-desc">' + m.d + '</div>' +
        '<div class="ms-date">' + m.date + '</div></div>' +
        '</div>'
      );
    }).join('');

  let links = '';
  if (p.github) {
    links += '<a href="' + p.github + '" target="_blank" class="btn btn-outline" style="width:100%;justify-content:center;margin-bottom:0.6rem">View on GitHub</a>';
  }
  if (p.demo) {
    links += '<a href="' + p.demo + '" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center">Live Demo →</a>';
  }
  if (!links) {
    links = '<div style="font-family:var(--mono);font-size:0.7rem;color:var(--text-muted)">No public links yet.</div>';
  }
  document.getElementById('d-links').innerHTML = links;
}

/* ============================================
   TYPING ANIMATION
============================================ */
const TITLES = [
  'Embedded Systems Engineer',
  'IoT Solutions Builder',
  'PCB Design Engineer',
  'Firmware Developer',
  'EV & Telematics Enthusiast',
  'EEE Student @ TUK',
];
let ti = 0, ci = 0, del = false;
const te = document.getElementById('typedTxt');

(function type() {
  const cur = TITLES[ti];
  if (!del) {
    te.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { del = true; setTimeout(type, 2200); return; }
  } else {
    te.textContent = cur.slice(0, --ci);
    if (ci === 0) { del = false; ti = (ti + 1) % TITLES.length; }
  }
  setTimeout(type, del ? 55 : 95);
})();

/* ============================================
   INIT
============================================ */
filterSkills('all', document.querySelector('.s-tab.active'));
renderOverview();
buildSkillBars();
