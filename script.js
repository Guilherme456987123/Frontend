document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 4; // 4 é o número total de imagens
        updateSlider();

        // Adicionado verificação para reiniciar quando chegar à última imagem
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

    const sliderInterval = setInterval(nextSlide, 3000); // Mude para a próxima imagem a cada 3 segundos
});
