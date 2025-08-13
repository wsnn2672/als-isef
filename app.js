const images = document.querySelectorAll('.section-image');
images.forEach(img => {
    img.style.display = 'none';
});

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