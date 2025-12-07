const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');
const navbarLinks = document.querySelectorAll('.navbar-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = navbarMenu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickInsideHamburger && navbarMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});