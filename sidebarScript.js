window.setupScrollTracking = function () {
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

  // Auto Scroll
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
  // Auto Scroll

  window.dispatchEvent(new Event("scroll"));
};

// Sidebar Toggle
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
// Sidebar Toggle