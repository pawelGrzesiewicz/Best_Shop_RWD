export function setupSmoothScroll() {
    document.addEventListener("DOMContentLoaded", function () {
        const linkRefs = document.querySelectorAll('nav a');

        // Add click event handling for smooth scrolling
        linkRefs.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Scroll smoothly to the target element, considering the header height
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                        behavior: 'smooth'
                    });

                    // Remove the 'active' class from all links before adding it to the clicked link
                    linkRefs.forEach(otherLink => {
                        otherLink.classList.remove('navigation__item--active');
                    });

                    // Add the 'active' class only to the clicked link
                    this.classList.add('navigation__item--active');
                }
            });
        });
    });
}