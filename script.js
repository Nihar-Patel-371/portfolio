// script.js

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const cloneFirstItem = carousel.firstElementChild.cloneNode(true);
    carousel.appendChild(cloneFirstItem);
    
    let isTransitioning = false;
    let currentIndex = 0;

    carousel.addEventListener('animationiteration', () => {
        if (!isTransitioning) {
            isTransitioning = true;
            currentIndex++;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.5s linear';
                carousel.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
                isTransitioning = false;
            });
        }
    });

    carousel.addEventListener('mouseenter', () => {
        carousel.classList.add('paused');
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.classList.remove('paused');
    });
});