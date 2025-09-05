document.addEventListener('DOMContentLoaded', () => {
    const heartFill = document.getElementById('heartFill');
    const cursorHand = document.getElementById('cursorHand');
    const heartWrapper = document.querySelector('.heart-wrapper');
    let fillLevel = 0;

    // Posicionar la mano del cursor
    const heartOutline = document.querySelector('.heart-outline');
    const heartRect = heartOutline.getBoundingClientRect();

    cursorHand.style.left = ${heartRect.width / 2}px;
    cursorHand.style.top = ${heartRect.height / 2 - 20}px; // Ajustar para que el dedo apunte al centro

    heartWrapper.addEventListener('click', () => {
        fillLevel += 20; // Aumentar el nivel de llenado
        if (fillLevel > 100) {
            fillLevel = 100;
        }
        heartFill.style.height = ${fillLevel}%;

        // Si el corazón está lleno, simular el corazón roto
        if (fillLevel === 100) {
            setTimeout(() => {
                heartWrapper.classList.add('heart-broken');
                // Opcional: reiniciar el corazón después de un tiempo
                setTimeout(() => {
                    heartWrapper.classList.remove('heart-broken');
                    heartFill.style.height = '0%';
                    fillLevel = 0;
                }, 3000);
            }, 1000); // Espera 1 segundo antes de "romperlo"
        }
    });
});
