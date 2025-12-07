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

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');
const dealCards = document.querySelectorAll('.deal-card');

let currentIndex = 0;
const cardWidth = dealCards[0].offsetWidth + 16;

dealCards.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
    const card = dealCards[currentIndex];
    if (card) {
        carousel.scrollTo({
            left: card.offsetLeft,
            behavior: 'smooth'
        });
        updateIndicators();
    }
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dealCards.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + dealCards.length) % dealCards.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 6000);

carousel.addEventListener('mouseenter', () => {
    // Optional: pause auto-scroll
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    console.log('Searching for:', searchInput.value);
});

document.getElementById('goto-shop').addEventListener('click', function() {
    window.location.href = "../Webshop/Webshop_front/webshop.html"
});

document.getElementById('cat-1').addEventListener('click', function() {
    window.location.href = '../Webshop/Webshop_front/webshop.html';
});

document.getElementById('cat-2').addEventListener('click', function() {
    window.location.href = '#';
});

document.getElementById('cat-3').addEventListener('click', function() {
    window.location.href = '../Repairs/repairs.html';
});