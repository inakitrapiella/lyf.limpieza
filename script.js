// Selecciona el botón de hamburguesa y el menú de enlaces
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Agrega evento para mostrar/ocultar el menú
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cierra el menú cuando se selecciona un enlace
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

