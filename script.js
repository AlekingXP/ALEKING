document.addEventListener('DOMContentLoaded', () => {
    const heartTop = document.getElementById('heartTop');
    const heartBottom = document.getElementById('heartBottom');
    const loveNotes = document.getElementById('loveNotes');
    const centerImage = document.getElementById('centerImage'); // Elemento de la imagen
    const heartWrapper = document.querySelector('.heart-wrapper');

    // Función para mover los corazones hacia el centro
    heartTop.addEventListener('click', () => {
        heartBottom.style.bottom = '50%';  // Juntar los corazones
        heartTop.style.top = '50%';
        
        // Hacer aparecer las cartas de amor
        setTimeout(() => {
            loveNotes.classList.add('show-notes');
            // Cambiar la imagen al centro
            centerImage.src = 'tu-aqui.jpg'; // 
        }, 1000); // 
    });
});

