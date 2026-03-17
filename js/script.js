// TAB SWITCHING
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// DARK MODE TOGGLE
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// PROJECT DATA
const projects = [
  {name: "Smart Lighting", progress: 80},
  {name: "AI Road Monitor", progress: 50},
  {name: "Bird Drone", progress: 30},
  {name: "Bluetooth Speaker", progress: 60},
  {name: "Digital Sundial", progress: 40}
];

// LOAD PROJECTS
const projectList = document.getElementById("projectList");
projects.forEach(p => {
  projectList.innerHTML += `
    <div class="project-card">
      <h3>${p.name}</h3>
      <div class="progress">
        <div class="progress-bar" style="width:${p.progress}%"></div>
      </div>
      <p>${p.progress}% complete</p>
    </div>
  `;
});

// DASHBOARD COUNTERS
function animateCounter(id, target) {
  let count = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count++;
    el.innerText = count;
    if (count >= target) clearInterval(interval);
  }, 50);
}

animateCounter("activeCount", projects.filter(p => p.progress < 100).length);
animateCounter("doneCount", projects.filter(p => p.progress === 100).length);

// INITIAL TAB
showTab("home");
