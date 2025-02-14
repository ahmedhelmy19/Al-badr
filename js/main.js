// Button for services

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;
const totalCards = slider.children.length;
const visibleCards = 4;
const maxIndex = totalCards - visibleCards; // ✅ ضبط الحد الأقصى للحركة

nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -(currentIndex * (100 / visibleCards));
    slider.style.transform = `translateX(${translateX}%)`;
}














