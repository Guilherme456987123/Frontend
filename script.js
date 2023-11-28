document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 4;
        updateSlider();

        if (currentIndex === 0) {
            resetSlider();
        }
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    function resetSlider() {
        currentIndex = 0;
        updateSlider();
    }

    const sliderInterval = setInterval(nextSlide, 5000); 
});
