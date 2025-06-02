document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const mainMenu = document.getElementById('main-menu');

    // Toggle del menú hamburguesa
    mobileMenuBtn.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (opcional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainMenu.classList.remove('active');
        });
    });

    // Efecto de sombra en el header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-glass');
        header.style.boxShadow = window.scrollY > 10 ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none';
    });
});