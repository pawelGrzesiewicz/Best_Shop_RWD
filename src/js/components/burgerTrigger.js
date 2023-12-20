
const burgerMenu = document.querySelector("div.burgerMenu");
const nav = document.querySelector(".navigation");

const mediaQuery = window.matchMedia("(max-width: 992px)");

const handleBurgerClick = () => {
    burgerMenu.classList.toggle("active");

    if (mediaQuery.matches) {
        nav.classList.toggle("active");
    }
};



const handleMediaQueryChange = (event) => {
    if (!event.matches) {

        nav.classList.remove("active");
    }
};

export {handleBurgerClick, handleMediaQueryChange, mediaQuery};