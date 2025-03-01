document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 2000);
    });

    // Запуск музыки с 2:39 (159 секунд)
    const audio = document.getElementById("background-music");
    audio.currentTime = 159;
    audio.play();
});
