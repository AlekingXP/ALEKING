document.addEventListener('DOMContentLoaded', () => {
    let heartLeft = document.querySelector('.heart-left');
    let heartRight = document.querySelector('.heart-right');
    let poemContainer = document.querySelector('.poem-container');
    let tulips = document.querySelector('.tulips');
    
    // Anima el corazón
    setTimeout(() => {
        heartLeft.style.transform = "rotate(0deg)";
        heartRight.style.transform = "rotate(0deg)";
        poemContainer.style.display = "block"; // Muestra el poema
        tulips.style.display = "block"; // Muestra los tulipanes
        document.getElementById('poem').textContent = "Poema especial para ti..."; // El poema
    }, 2000); // El tiempo que tarda en abrirse el corazón

    // Puedes añadir un ramo de tulipanes con una imagen
    let tulipImage = document.getElementById('tulips-img');
    tulipImage.src = 'ruta-del-ramo-de-tulipanes.jpg'; // Coloca la imagen correcta aquí
});
