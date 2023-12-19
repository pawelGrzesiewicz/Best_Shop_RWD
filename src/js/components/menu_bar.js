document.addEventListener("DOMContentLoaded", function() {
    const linkRefs = document.querySelectorAll('nav a');
    let isScrolling;

    function setActiveLink() {
        const scrollPosition = window.scrollY;

        linkRefs.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement && targetElement.offsetTop - document.querySelector('.header').offsetHeight <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight - document.querySelector('.header').offsetHeight > scrollPosition) {
                // Sprawdź, czy link nie ma już klasy active
                if (!link.classList.contains('navigation__item--active')) {
                    // Usuń klasę active ze wszystkich linków
                    linkRefs.forEach(otherLink => {
                        otherLink.classList.remove('navigation__item--active');
                    });

                    // Dodaj klasę active tylko do aktualnie widocznej sekcji
                    link.classList.add('navigation__item--active');
                }
            }
        });
    }

    // Ustaw aktywny link przy załadowaniu strony
    setActiveLink();

    // Nasłuchuj scroll, aby śledzić aktualną sekcję i aktualizować link nawigacyjny
    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            setActiveLink();
        }, 150);
    });

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