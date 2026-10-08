/* ---------- Reveal on Scroll ---------- */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ---------- Theme Toggle ---------- */
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
const theme = savedTheme || "dark";

body.classList.add(theme);

if (toggleBtn) {
  toggleBtn.textContent = theme === "light" ? "🌞" : "🌙";
}

window.addEventListener("load", () => {
  if (theme === "dark") {
    body.classList.add("start-animate");
  }
});

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.remove("start-animate");

    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.replace("light", "dark");
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");

      setTimeout(() => {
        body.classList.add("start-animate");
      }, 50);
    }
  });
}

/* ---------- Mobile Navbar ---------- */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-links:not(.desktop)");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

/* ---------- Navbar Hide on Scroll ---------- */
const navbar = document.querySelector(".navbar");
let lastScrollY = window.pageYOffset;

window.addEventListener("scroll", () => {
  if (!navbar) return;

  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

/* ---------- Makeclouds Works ---------- */
const makecloudsWorks = [
  {
    img: "assets/images/work4.png",
    note: "Captured during my experience working with friends at their company, this moment reflects collaborative learning, shared problem-solving, and real-time development exposure. Team collaboration moment during my time at a friend-led company, where I gained hands-on exposure to real-world project workflows, teamwork, and practical development practices."
  },
  {
    img: "assets/images/work2.png",
    note: "SQLite Employee Management System – Add, view, search and delete employee records using Python and SQLite."
  },
  {
    img: "assets/images/work3.png",
    note: "AI Face Detection Project – Real-time face detection using OpenCV Haar Cascade with webcam integration."
  },
  {
    img: "assets/images/work5.png",
    note: "Bank Account Management System (OOPS) – Encapsulation-based Python project with deposit, withdraw, edit profile and validation features."
  },
  {
    img: "assets/images/work1.png",
    note: "Python + MySQL Mini Project – User registration system with database connectivity, validation and menu-driven operations."
  },
  {
    img: "assets/images/work6.jpeg",
    note: "The system is designed to generate clear, human-like voices with proper pronunciation, tone, and flow, making it suitable for applications such as virtual assistants, accessibility tools, audiobooks, and automated announcements."
  }
];

/* ---------- RD INFRO Works ---------- */
const rdinfroWorks = [
  {
    img: "assets/images/python_1.png",
    note: "Your combined code examples demonstrate the complete workflow of exception handling in Python, covering basic handling, specific exceptions, custom exceptions, and validation logic."
  },
  {
    img: "assets/images/python_4.png",
    note: "JSON is a format used to store and exchange data, and Python’s json module helps convert data between Python objects and JSON format."
  },
  {
    img: "assets/images/python_5.png",
    note: "Built a simple yet interactive Python Quiz Game that takes user input, validates answers, calculates scores, and displays percentage results."
  }
];

/* ---------- Makeclouds Showcase ---------- */
let makeIndex = 0;

function openMakeWorks() {
  document.getElementById("experience")?.classList.add("hidden");
  document.getElementById("makeShowcase")?.classList.remove("hidden");
  loadMake();
}

function loadMake() {
  const image = document.getElementById("makeImage");
  const note = document.getElementById("makeNote");

  if (image) image.src = makecloudsWorks[makeIndex].img;
  if (note) note.innerText = makecloudsWorks[makeIndex].note;
}

function nextMake() {
  makeIndex = (makeIndex + 1) % makecloudsWorks.length;
  loadMake();
}

function prevMake() {
  makeIndex =
    (makeIndex - 1 + makecloudsWorks.length) % makecloudsWorks.length;
  loadMake();
}

/* ---------- RD INFRO Showcase ---------- */
let rdIndex = 0;

function openRDWorks() {
  document.getElementById("experience")?.classList.add("hidden");
  document.getElementById("rdShowcase")?.classList.remove("hidden");
  loadRD();
}

function loadRD() {
  const image = document.getElementById("rdImage");
  const note = document.getElementById("rdNote");

  if (image) image.src = rdinfroWorks[rdIndex].img;
  if (note) note.innerText = rdinfroWorks[rdIndex].note;
}

function nextRD() {
  rdIndex = (rdIndex + 1) % rdinfroWorks.length;
  loadRD();
}

function prevRD() {
  rdIndex = (rdIndex - 1 + rdinfroWorks.length) % rdinfroWorks.length;
  loadRD();
}

/* ---------- Back to Experience ---------- */
function backToExperience() {
  document.getElementById("experience")?.classList.remove("hidden");
  document.getElementById("makeShowcase")?.classList.add("hidden");
  document.getElementById("rdShowcase")?.classList.add("hidden");
}

/* ---------- Resume ---------- */
function openResumeView() {
  const modal = document.getElementById("resumeViewModal");
  if (modal) modal.style.display = "flex";
}

function closeResumeView() {
  const modal = document.getElementById("resumeViewModal");
  if (modal) modal.style.display = "none";
}

/* ---------- Profile Blob ---------- */
const blob = document.querySelector(".blob");

if (blob) {
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    blob.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ---------- Project Filters ---------- */
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(project => {
    const isPortfolio = project.classList.contains("featured");
    const isLayout = project.classList.contains("layout-project");
    const isSVG = project.classList.contains("svg-card");
    const isCalculator = project.classList.contains("calculator-project");
    const isQRGenerator = project.classList.contains("qr-generator-project");

    const categories =
      (project.getAttribute("data-category") || "").split(/\s+/);

    // ALL: Show all except IDEA projects
    if (category === "all") {
      project.style.display =
        categories.includes("idea") ? "none" : "block";
    }

    // WEB: Show only the designated web projects
    else if (category === "web") {
      project.style.display =
        (isPortfolio || isLayout || isSVG || isCalculator || isQRGenerator)
          ? "block"
          : "none";
    }

    // IDEA
    else if (category === "idea") {
      project.style.display =
        categories.includes("idea") ? "block" : "none";
    }

    // DJANGO / AI / FLASK and other categories
    else if (categories.includes(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

/* ---------- Initial Project Visibility ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(project => {
    const isLayout = project.classList.contains("layout-project");
    const isSVG = project.classList.contains("svg-card");
    const isCalculator = project.classList.contains("calculator-project");
    const isQRGenerator = project.classList.contains("qr-generator-project");

    const categories =
      (project.getAttribute("data-category") || "").split(/\s+/);

    const isIdea = categories.includes("idea");
    const isFunQuiz =
      project.querySelector("h3")?.textContent.includes("FunQuiz");

    // Hide these projects only on initial page load
    if (isLayout || isSVG || isCalculator || isQRGenerator || isIdea || isFunQuiz) {
      project.style.display = "none";
    } else {
      project.style.display = "block";
    }
  });
});

/* ---------- Active Filter Button ---------- */
const buttons = document.querySelectorAll(".project-filters button");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    buttons.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
  });
});

/* ---------- Back to Top ---------- */
const topBtn = document.getElementById("topBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (window.scrollY > 300) {
    topBtn.style.opacity = "1";
    topBtn.style.pointerEvents = "auto";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.pointerEvents = "none";
  }
});