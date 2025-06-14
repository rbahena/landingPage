// Carousel logic
let currentSlide = 0;

function showSlide(index) {
    const container = document.getElementById('carouselImages');
    if (!container) return;

    const total = container.children.length;

    if (index < 0) {
        currentSlide = total - 1;
    } else if (index >= total) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
    setInterval(nextSlide, 4000); // autoplay every 4s
});