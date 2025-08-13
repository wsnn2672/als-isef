const checkbox = document.getElementById('toggleImages');
checkbox.addEventListener('change', function () {
    const images = document.querySelectorAll('.section-image');
    images.forEach(img => {
        img.style.display = this.checked ? 'block' : 'none';
    });
});

const checkbox2 = document.getElementById('toggleTurkish');
checkbox2.addEventListener('change', function () {
    const trTexts = document.querySelectorAll('.turkish-text');
    trTexts.forEach(txt => {
        txt.style.display = this.checked ? 'block' : 'none';
    });
});

window.secret = function() {
    window.location.href = "gizli/index.html";
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const sideBar = document.getElementById("sidebar");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", () => {
  if (window.scrollY >= headerHeight / 2) {
    sideBar.style.top = "0px";
  } else {
    sideBar.style.top = headerHeight + "px";
  }
});
sideBar.style.top = headerHeight + "px";


const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
