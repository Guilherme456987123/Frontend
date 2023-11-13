document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3; // 3 é o número total de imagens
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 3000); // Mude para a próxima imagem a cada 3 segundos
});