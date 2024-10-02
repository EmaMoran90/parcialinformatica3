// Carrusel automático
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images a');
const totalImages = images.length;
function showNextImage() {
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice
    images[currentIndex].style.display = 'block'; // Muestra la nueva imagen
}

// Inicializa el carrusel
setInterval(showNextImage, 3000); // Cambia cada 3 segundos