// TAB SWITCHING
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// DARK MODE
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// PROJECT DATA
const projects = [
  {name: "Smart Lighting", progress: 80},
  {name: "AI Road Monitor", progress: 50},
  {name: "Bird Drone", progress: 30}
];

// LOAD PROJECTS
const projectList = document.getElementById("projectList");

projects.forEach(p => {
  projectList.innerHTML += `
    <div class="project">
      <h3>${p.name}</h3>
      <div class="progress">
        <div class="progress-bar" style="width:${p.progress}%"></div>
      </div>
      <p>${p.progress}% complete</p>
    </div>
  `;
});

// DASHBOARD COUNTS
document.getElementById("activeCount").innerText =
  projects.filter(p => p.progress < 100).length;

document.getElementById("doneCount").innerText =
  projects.filter(p => p.progress === 100).length;
