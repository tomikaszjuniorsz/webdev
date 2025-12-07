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

const form = document.getElementById('message');

    const lnameInput = document.getElementById('lname');
    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const ordernumInput = document.getElementById('ordnumber');
    const topicInput = document.getElementById('topic');
    const descInput = document.getElementById('desc')

    // Hibaüzenet tárolók
    const errorLname = document.getElementById('error-lname');
    const errorFname = document.getElementById('error-fname');
    const errorEmail = document.getElementById('error-email');
    const errorPhone = document.getElementById('error-phone');
    const errorOrdernum = document.getElementById('error-ordnumber');
    const errorTopic = document.getElementById('error-topic');
    const errorDesc = document.getElementById('error-desc')

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(el => el.classList.remove('input-error'));

        if (lnameInput.value.trim() === "") {
            errorLname.textContent = "A vezetéknév megadása kötelező!";
            lnameInput.classList.add('input-error');
            isValid = false;
        }

        if (fnameInput.value.trim() === "") {
            errorFname.textContent = "A keresztnév megadása kötelező!";
            fnameInput.classList.add('input-error');
            isValid = false;
        }

        if (isNaN(phoneInput.value)) {
            errorPhone.textContent = "Telefonszámot adj meg.";
            phoneInput.classList.add('input-error');
            isValid = false;
        }

        if (isNaN(ordernumInput.value)) {
            errorOrdernum.textContent = "Telefonszámot adj meg.";
            ordernumInput.classList.add('input-error');
            isValid = false;
        }

        if (topicInput.value === "") {
            errorTopic.textContent = "Kérjük válasszon egy témát!";
            topicInput.classList.add('input-error');
            isValid = false;
        }

        if (descInput.value.length > 1500) {
            errorDesc.textContent = "Meghaladta a karakterlimitet (1500).";
            descInput.classList.add('input-error');
            isValid = false;
        }

        // --- DÖNTÉS ---
        
        if (!isValid) {
            event.preventDefault(); // Megállítjuk a küldést, ha hiba van
            console.log("Hiba az űrlapon!");
        } else {
            // Ha minden OK, engedjük tovább a httpbin-re
            console.log("Minden adat rendben van.");
        }
    });