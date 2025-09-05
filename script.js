document.addEventListener('DOMContentLoaded', () => {
    const heartFill = document.getElementById('heartFill');
    const cursorHand = document.getElementById('cursorHand');
    const heartWrapper = document.querySelector('.heart-wrapper');
    let fillLevel = 0;

    // Ajustar posición inicial de la mano
    const heartOutline = document.querySelector('.heart-outline');
    const heartRect = heartOutline.getBoundingClientRect();

    cursorHand.style.left = `${heartRect.width / 2}px`;
    cursorHand.style.top = `${heartRect.height / 2 - 20}px`;

    heartWrapper.addEventListener('click', () => {
        fillLevel += 20;
        if (fillLevel > 100) fillLevel = 100;
        heartFill.style.height = `${fillLevel}%`;

        if (fillLevel === 100) {
            setTimeout(() => {
                heartWrapper.classList.add('heart-broken');
                setTimeout(() => {
                    heartWrapper.classList.remove('heart-broken');
                    heartFill.style.height = '0%';
                    fillLevel = 0;
                }, 3000);
            }, 1000);
        }
    });
});

