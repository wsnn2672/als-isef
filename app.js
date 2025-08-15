// Checkboxs
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
// Checkboxs

console.log("Merhaba JavaScript1");

// Commands On Console
window.secret = function() {
    window.location.href = "gizli/index.html";
}
// Commands On Console

function setupProfileFilter() {
  const buttons = document.querySelectorAll(".profile-buttons a");
  const sections = document.querySelectorAll(".profile-section");

  buttons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const target = button.dataset.target;

      // 🔄 Aktif sınıfı güncelle
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // 🔍 Section filtreleme
      sections.forEach(section => {
        if (target === "all") {
          section.style.display = "block";
        } else {
          section.style.display = section.dataset.owner === target ? "block" : "none";
        }
      });
    });
  });

  // 🟢 Varsayılan olarak ilk butona tıklat (örneğin "all")
  const defaultButton = document.querySelector('.profile-buttons a[data-target="all"]');
  if (defaultButton) defaultButton.click();
}

const sidebarList = document.getElementById("sidebarList");
const mainContent = document.getElementById("mainContent");

fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const sidebarList = document.getElementById("sidebarList");
    const mainContent = document.getElementById("mainContent");

    data.forEach(section => {
      // Sidebar link
      const menuTemplate = document.getElementById("menuItemTemplate");
      const menuClone = menuTemplate.content.cloneNode(true);
      const link = menuClone.querySelector("a");
      link.textContent = section.title;
      link.href = `#${section.id}`;
      link.classList.add("nav-link");
      sidebarList.appendChild(menuClone);

      // Section content
      const sectionTemplate = document.getElementById("sectionTemplate");
      const sectionClone = sectionTemplate.content.cloneNode(true);
      const sectionEl = sectionClone.querySelector("section");
      sectionEl.id = section.id;
      sectionEl.classList.add("profile-section"); // 👈 filtreleme için sınıf ekliyoruz
      sectionEl.dataset.owner = section.owner;    // 👈 örnek: "sinan", "eren", "eyup"

      sectionEl.querySelector("h2").textContent = section.title;

      const contentPair = sectionEl.querySelector(".content-pair");

      if (section.texts.TR) {
        const trBox = document.createElement("div");
        trBox.className = "box turkish-text";
        trBox.innerHTML = `<strong>TR:</strong><br>` + section.texts.TR.map(p => `<p>${p}</p>`).join("");
        contentPair.appendChild(trBox);
      }

      if (section.texts.EN) {
        const enBox = document.createElement("div");
        enBox.className = "box";
        enBox.innerHTML = `<strong>EN:</strong><br>` + section.texts.EN.map(p => `<p>${p}</p>`).join("");
        contentPair.appendChild(enBox);
      }

      const imageContainer = sectionEl.querySelector(".image-container");
      section.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = section.title;
        img.className = "section-image";
        img.style = "width:100%; max-width:600px; display:block; margin:20px auto; border-radius:8px;";
        imageContainer.appendChild(img);
      });

      mainContent.appendChild(sectionEl);
    });

    setupScrollTracking();
    setupProfileFilter();
  });
