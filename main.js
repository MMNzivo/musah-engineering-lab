/* ============================================
   DATA — SKILLS
============================================ */
const SKILLS = {
  frontend: [
    { n: 'React',        c: 'cyan'   },
    { n: 'Next.js',      c: 'cyan'   },
    { n: 'Vue.js',       c: 'cyan'   },
    { n: 'TypeScript',   c: 'cyan'   },
    { n: 'Tailwind CSS', c: 'cyan'   },
    { n: 'HTML / CSS',   c: 'cyan'   },
    { n: 'Redux',        c: 'cyan'   },
    { n: 'GraphQL',      c: 'cyan'   },
    { n: 'Vite',         c: 'cyan'   },
  ],
  backend: [
    { n: 'Node.js',      c: 'amber'  },
    { n: 'Python',       c: 'amber'  },
    { n: 'FastAPI',      c: 'amber'  },
    { n: 'Express',      c: 'amber'  },
    { n: 'PostgreSQL',   c: 'amber'  },
    { n: 'MongoDB',      c: 'amber'  },
    { n: 'Redis',        c: 'amber'  },
    { n: 'REST APIs',    c: 'amber'  },
    { n: 'Go',           c: 'amber'  },
  ],
  mobile: [
    { n: 'React Native', c: 'green'  },
    { n: 'Flutter',      c: 'green'  },
    { n: 'Expo',         c: 'green'  },
    { n: 'Swift (iOS)',  c: 'green'  },
    { n: 'Firebase',     c: 'green'  },
  ],
  ml: [
    { n: 'TensorFlow',   c: 'purple' },
    { n: 'PyTorch',      c: 'purple' },
    { n: 'scikit-learn', c: 'purple' },
    { n: 'OpenAI API',   c: 'purple' },
    { n: 'Hugging Face', c: 'purple' },
    { n: 'LangChain',    c: 'purple' },
    { n: 'RAG Systems',  c: 'purple' },
  ],
  devops: [
    { n: 'Docker',           c: 'cyan' },
    { n: 'Kubernetes',       c: 'cyan' },
    { n: 'GitHub Actions',   c: 'cyan' },
    { n: 'AWS',              c: 'cyan' },
    { n: 'Nginx',            c: 'cyan' },
    { n: 'Linux',            c: 'cyan' },
    { n: 'Terraform',        c: 'cyan' },
  ],
  interests: [
    { n: 'System Design',        c: 'amber'  },
    { n: 'Open Source',          c: 'amber'  },
    { n: 'Tech Writing',         c: 'amber'  },
    { n: 'AI Research',          c: 'purple' },
    { n: 'Dev Tools',            c: 'green'  },
    { n: 'Engineering Culture',  c: 'green'  },
    { n: 'Hackathons',           c: 'cyan'   },
  ],
};

/* ============================================
   DATA — PROFILE SKILL BARS
============================================ */
const PROF_SKILLS = [
  { n: 'Frontend Development', p: 90 },
  { n: 'Backend Engineering',  p: 85 },
  { n: 'Mobile Development',   p: 75 },
  { n: 'ML / AI Integration',  p: 70 },
  { n: 'DevOps & Infra',       p: 78 },
];

/* ============================================
   DATA — PROJECTS
   Replace with your own real projects!
============================================ */
const PROJECTS = [
  {
    id: 'p1',
    field: 'ml',
    status: 'ongoing',
    progress: 65,
    title: 'AI-Powered Code Review Tool',
    desc: 'An intelligent code review system using LLMs to detect bugs, suggest refactors, and enforce coding standards in real-time across PRs.',
    tags: ['Python', 'OpenAI API', 'React', 'FastAPI'],
    started: 'Jan 2025',
    overview: `This full-stack application integrates large language models to automate the code review process. It analyzes pull requests, identifies potential bugs, suggests refactoring opportunities, and enforces coding standards — freeing engineers to focus on higher-level design decisions.`,
    objectives: [
      'Build LLM-powered static analysis pipeline',
      'Develop GitHub/GitLab webhook integration',
      'Create an intuitive developer review UI',
      'Implement feedback loop for model fine-tuning',
      'Deploy scalable inference infrastructure',
    ],
    approach: `The system uses a RAG (Retrieval-Augmented Generation) approach, combining traditional static analysis with LLM reasoning. FastAPI handles the backend, React provides the review interface, and the system is fully containerized with Docker and deployed via GitHub Actions.`,
    milestones: [
      { t: 'Architecture & Planning', d: 'System design, tech stack selection',       date: 'Jan 2025', s: 'done'    },
      { t: 'LLM Integration',         d: 'OpenAI API integration, prompt engineering', date: 'Feb 2025', s: 'done'    },
      { t: 'Backend API',             d: 'FastAPI endpoints and webhook handlers',      date: 'Mar 2025', s: 'current' },
      { t: 'Frontend Dashboard',      d: 'Review UI and developer experience',          date: 'Apr 2025', s: 'pending' },
      { t: 'Production Deployment',   d: 'Docker, K8s, CI/CD pipeline',                date: 'May 2025', s: 'pending' },
    ],
    info: { Domain: 'ML / AI', Stack: 'Python · React · FastAPI', Started: 'Jan 2025', Target: 'May 2025', Type: 'Full-Stack App' },
    github: 'https://github.com/musah-engineering-lab/ai-code-review',
    demo: null,
  },
  {
    id: 'p2',
    field: 'frontend',
    status: 'ongoing',
    progress: 80,
    title: 'Real-Time Collaborative Dashboard',
    desc: 'A live analytics dashboard with multi-user collaboration — annotations, cursor presence, and real-time data sync for entire teams.',
    tags: ['React', 'WebSockets', 'Node.js', 'TypeScript'],
    started: 'Dec 2024',
    overview: `This dashboard enables engineering and product teams to collaborate on data analysis in real-time. Users see each other's cursors, annotate charts, leave threaded comments, and work on the same dataset simultaneously — bringing a Google Docs-like experience to analytics.`,
    objectives: [
      'Implement WebSocket-based real-time data sync',
      'Build interactive, filterable D3.js chart layer',
      'Add multi-user cursor tracking and presence',
      'Develop commenting and annotation system',
      'Optimize rendering performance for large datasets',
    ],
    approach: `Built with React on the frontend using custom WebSocket hooks. Node.js with Socket.io powers the real-time layer. PostgreSQL persists the data with an event-sourcing pattern to ensure consistency across all connected clients.`,
    milestones: [
      { t: 'UI Design & Prototyping', d: 'Wireframes, component library',              date: 'Dec 2024', s: 'done'    },
      { t: 'Chart Components',        d: 'Interactive D3.js visualization',             date: 'Jan 2025', s: 'done'    },
      { t: 'Real-Time Engine',        d: 'WebSocket integration and sync logic',        date: 'Feb 2025', s: 'done'    },
      { t: 'Collaboration Features',  d: 'Cursors, comments, presence indicators',      date: 'Mar 2025', s: 'current' },
      { t: 'Performance & Launch',    d: 'Optimization and production release',         date: 'Apr 2025', s: 'pending' },
    ],
    info: { Domain: 'Frontend', Stack: 'React · Node.js · Socket.io', Started: 'Dec 2024', Target: 'Apr 2025', Type: 'Web Application' },
    github: 'https://github.com/musah-engineering-lab/realtime-dashboard',
    demo: null,
  },
  {
    id: 'p3',
    field: 'mobile',
    status: 'ongoing',
    progress: 45,
    title: 'Mobile Health Tracker',
    desc: 'Cross-platform health app with on-device ML insights, habit tracking, gamification, and wearable device integration.',
    tags: ['React Native', 'TensorFlow Lite', 'Firebase', 'Expo'],
    started: 'Feb 2025',
    overview: `A comprehensive health tracking application that learns from user behavior to provide personalized, privacy-preserving recommendations. The app integrates with popular wearables and uses on-device ML so your health data never leaves your phone.`,
    objectives: [
      'Build cross-platform React Native foundation',
      'Integrate Apple Health and Google Fit APIs',
      'Implement on-device ML health models',
      'Design habit tracking and gamification system',
      'Connect to cloud backend with end-to-end encryption',
    ],
    approach: `React Native with Expo provides the cross-platform foundation. TensorFlow Lite enables on-device inference for privacy. Firebase handles authentication and cloud sync, while a custom Kotlin module manages low-level Bluetooth LE wearable communication.`,
    milestones: [
      { t: 'App Foundation',       d: 'Navigation, state management, design system',  date: 'Feb 2025', s: 'done'    },
      { t: 'Health Data Models',   d: 'Data schemas and FHIR compliance layer',        date: 'Mar 2025', s: 'current' },
      { t: 'Wearable Integration', d: 'Apple Health, Google Fit, Bluetooth LE',        date: 'Apr 2025', s: 'pending' },
      { t: 'ML Features',          d: 'On-device training and inference engine',       date: 'May 2025', s: 'pending' },
      { t: 'App Store Release',    d: 'iOS & Android submission and review',           date: 'Jun 2025', s: 'pending' },
    ],
    info: { Domain: 'Mobile', Stack: 'React Native · TensorFlow Lite', Started: 'Feb 2025', Target: 'Jun 2025', Type: 'Mobile App' },
    github: 'https://github.com/musah-engineering-lab/mobile-health-tracker',
    demo: null,
  },
];


/* ============================================
   ROUTING
============================================ */
let current  = 'home';
let prev     = null;
let detailId = null;

function go(page, id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  if (page === 'detail' && id) {
    detailId = id;
    loadDetail(id);
    document.getElementById('page-detail').classList.add('active');
  } else {
    document.getElementById('page-' + page).classList.add('active');
  }

  // Update nav active state
  document.querySelectorAll('.nav-links a[data-page]').forEach(a =>
    a.classList.toggle('active', a.dataset.page === page)
  );

  // Show/hide floating back button
  const fab = document.getElementById('fab');
  fab.classList.toggle('show', page !== 'home');

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

  const items = cat === 'all'
    ? Object.values(SKILLS).flat()
    : (SKILLS[cat] || []);

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
   SKILLS — PROFILE BARS
============================================ */
function buildSkillBars() {
  document.getElementById('profSkillBars').innerHTML = PROF_SKILLS.map(function(s) {
    return (
      '<div class="s-bar">' +
        '<div class="s-bar-hd"><span>' + s.n + '</span><span>' + s.p + '%</span></div>' +
        '<div class="s-bar-track">' +
          '<div class="s-bar-fill" data-p="' + s.p + '" style="width:0%"></div>' +
        '</div>' +
      '</div>'
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
   PROJECT CARD HTML
============================================ */
function buildCard(p) {
  const fieldLabel = p.field.toUpperCase().replace('ML', 'ML / AI');
  const tagHtml    = p.tags.map(function(t) { return '<span class="p-tag">' + t + '</span>'; }).join('');

  return (
    '<div class="p-card" onclick="go(\'detail\',\'' + p.id + '\')">' +
      '<div class="p-status ' + p.status + '">' + p.status.toUpperCase() + '</div>' +
      '<div class="p-title">'  + p.title + '</div>' +
      '<div class="p-field">'  + fieldLabel + '</div>' +
      '<div class="p-desc">'   + p.desc + '</div>' +
      '<div class="p-bar">' +
        '<div class="bar-label"><span>PROGRESS</span><span>' + p.progress + '%</span></div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + p.progress + '%"></div></div>' +
      '</div>' +
      '<div class="p-tags">' + tagHtml + '</div>' +
      '<div class="p-footer">' +
        '<div class="p-date">' + p.started + '</div>' +
        '<div class="p-arrow">DETAILS ' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
            '<polyline points="9 18 15 12 9 6"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

/* Home overview — ongoing projects only */
function renderOverview() {
  document.getElementById('overviewGrid').innerHTML =
    PROJECTS.filter(function(p) { return p.status === 'ongoing'; })
            .map(buildCard)
            .join('');
}

/* Projects page — all projects with field filter */
let activeField = 'all';

function renderAllProjects() {
  const fields = ['frontend', 'backend', 'mobile', 'ml', 'devops'];

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

  const shown = field === 'all'
    ? PROJECTS
    : PROJECTS.filter(function(p) { return p.field === field; });

  document.getElementById('allGrid').innerHTML = shown.length
    ? shown.map(buildCard).join('')
    : '<div style="color:var(--text-muted);font-family:var(--mono);font-size:0.8rem;padding:2rem 0">No projects in this category yet.</div>';
}


/* ============================================
   PROJECT DETAIL PAGE
============================================ */
function loadDetail(id) {
  const p = PROJECTS.find(function(x) { return x.id === id; });
  if (!p) return;

  const fieldLabel = p.field.toUpperCase().replace('ML', 'ML / AI');

  document.getElementById('d-status').innerHTML =
    '<span class="p-status ' + p.status + '">' + p.status.toUpperCase() + '</span>';
  document.getElementById('d-title').textContent  = p.title;
  document.getElementById('d-field').textContent  = fieldLabel;
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
      return (
        '<div class="info-row">' +
          '<span class="info-k">' + entry[0] + '</span>' +
          '<span class="info-v">' + entry[1] + '</span>' +
        '</div>'
      );
    }).join('');

  // Milestones
  document.getElementById('d-milestones').innerHTML =
    p.milestones.map(function(m, i) {
      const line = i < p.milestones.length - 1 ? '<div class="ms-line"></div>' : '';
      return (
        '<div class="milestone">' +
          '<div class="ms-col">' +
            '<div class="ms-dot ' + m.s + '"></div>' +
            line +
          '</div>' +
          '<div class="ms-content">' +
            '<div class="ms-title">' + m.t + '</div>' +
            '<div class="ms-desc">'  + m.d + '</div>' +
            '<div class="ms-date">'  + m.date + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

  // Links
  let links = '';
  if (p.github) {
    links +=
      '<a href="' + p.github + '" target="_blank" class="btn btn-outline" ' +
      'style="width:100%;justify-content:center;margin-bottom:0.6rem;font-size:0.68rem">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 ' +
          '6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 ' +
          '16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 ' +
          '5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>' +
        '</svg>' +
        'VIEW ON GITHUB' +
      '</a>';
  }
  if (p.demo) {
    links +=
      '<a href="' + p.demo + '" target="_blank" class="btn btn-primary" ' +
      'style="width:100%;justify-content:center;font-size:0.68rem">' +
        'LIVE DEMO →' +
      '</a>';
  }
  if (!links) {
    links = '<div style="font-family:var(--mono);font-size:0.7rem;color:var(--text-muted)">No public links yet</div>';
  }
  document.getElementById('d-links').innerHTML = links;
}


/* ============================================
   TYPING ANIMATION
============================================ */
const TITLES = [
  'Full-Stack Engineer',
  'Frontend Developer',
  'Backend Architect',
  'ML / AI Builder',
  'Mobile Developer',
  'DevOps Engineer',
];

let ti  = 0;
let ci  = 0;
let del = false;
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
   INIT — run on page load
============================================ */
filterSkills('all', document.querySelector('.s-tab.active'));
renderOverview();
buildSkillBars();
