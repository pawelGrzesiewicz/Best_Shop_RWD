import {formRef, selectRef, doAwesomeThings} from './components/calculator';
import {setupSmoothScroll} from './components/smoothScroll';
import {handleBurgerClick, handleMediaQueryChange, mediaQuery} from './components/burgerTrigger';
import { setupButtonClick } from './components/handleBeginBtn';



// Event listener for calculator form submission
formRef.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform awesome things related to the form submission
    doAwesomeThings(formRef, selectRef);
});

// Setting up smooth scroll functionality
setupSmoothScroll();



// Burger trigger setup
const burgerTrigger = document.querySelector("div.burgerTrigger");

// Adding click event listener for the burger trigger
burgerTrigger.addEventListener("click", handleBurgerClick);

// Adding a media query listener for handling changes
mediaQuery.addListener(handleMediaQueryChange);

// Initial handling of the media query
handleMediaQueryChange(mediaQuery);


// Call the setupButtonClick function
setupButtonClick();