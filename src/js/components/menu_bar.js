document.addEventListener("DOMContentLoaded", function() {
    const linkRefs = document.querySelectorAll('nav a');


    // Dodaj obsługę kliknięcia do płynnego przewijania
    linkRefs.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });

                // Usuń klasę active ze wszystkich linków przed dodaniem do klikniętego linku
                linkRefs.forEach(otherLink => {
                    otherLink.classList.remove('navigation__item--active');
                });

                // Dodaj klasę active tylko do klikniętego linku
                this.classList.add('navigation__item--active');
            }
        });
    });
});