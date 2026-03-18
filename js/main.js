// ==========================
// MAIN.JS FOR MUSAH PORTFOLIO
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE NAVIGATION */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileClose = document.querySelector(".mobile-nav-close");

  hamburger.addEventListener("click", () => mobileNav.classList.add("open"));
  mobileClose.addEventListener("click", () => mobileNav.classList.remove("open"));
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("open"));
  });

  /* HERO TYPING EFFECT */
  const typedEl = document.querySelector(".hero-typed");
  const roles = ["Frontend Developer", "Backend Developer", "Mobile Developer", "ML/AI Enthusiast", "DevOps Engineer"];
  let roleIndex = 0;
  let charIndex = 0;

  function typeRole() {
    if (!typedEl) return;
    typedEl.textContent = roles[roleIndex].slice(0, charIndex) + "|";
    charIndex++;
    if (charIndex > roles[roleIndex].length) {
      setTimeout(() => {
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        typeRole();
      }, 1500);
    } else {
      setTimeout(typeRole, 120);
    }
  }
  typeRole();

  /* SKILLS TAB SWITCHING */
  const skillTabs = document.querySelectorAll(".s-tab");
  const skillCloud = document.querySelector(".tag-cloud");

  skillTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      skillTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.category;
      const tags = skillCloud.querySelectorAll(".s-tag");
      tags.forEach(tag => {
        if (category === "all" || tag.classList.contains(category)) {
          tag.style.display = "inline-flex";
        } else {
          tag.style.display = "none";
        }
      });
    });
  });

  /* PROJECTS PROGRESS BAR ANIMATION */
  const progressBars = document.querySelectorAll(".bar-fill");

  function animateBars() {
    progressBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      if (barTop < winHeight - 50) {
        bar.style.width = bar.dataset.fill;
      }
    });
  }
  window.addEventListener("scroll", animateBars);
  animateBars();

  /* SMOOTH SCROLL FOR ANCHORS */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

});
