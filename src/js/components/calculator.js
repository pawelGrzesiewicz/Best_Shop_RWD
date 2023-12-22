import {setupButtonClick, btnValue} from './handleBeginBtn';

const formRef = document.querySelector('.calc');
const selectedRef = document.querySelector('.selected-option');
const dropdownRef = document.querySelector('.options');
const itemsRefs = document.querySelectorAll('.options li');
const checkboxesRefs = document.querySelectorAll('.checkbox');

// Set the initial value of the select input
if (btnValue) {
    selectedRef.value = btnValue;
}


// Function to perform awesome things based on user input
function doAwesomeThings(items, target) {
    items.classList.add('open');
    const value = parseFloat(target.value) || 0;
    const price = value * 0.5;
    items.querySelector('.item__calc').textContent = `${value} * $0.5`;
    items.querySelector('.item__price').textContent = `$${price}`;
}

// Event listener for form input changes
formRef.addEventListener("input", (event) => {
    const target = event.target;
    const products = document.querySelector('[data-id="products"]');
    const orders = document.querySelector('[data-id="orders"]');
    const accounting = document.querySelector('[data-id="accounting"]');
    const terminal = document.querySelector('[data-id="terminal"]');

    // Perform awesome things based on the input field
    if (target.id === 'products') {
        doAwesomeThings(products, target);
    } else if (target.id === 'orders') {
        doAwesomeThings(orders, target)
    } else if (target.id === 'accounting') {
        accounting.classList.toggle('open');
    } else if (target.id === 'terminal') {
        terminal.classList.toggle('open');
    }
});

// Event listener for clicking on the select element
selectedRef.addEventListener('click', () => {
    dropdownRef.classList.toggle('open');
}, false);

// Event listener for clicking on the dropdown items
itemsRefs.forEach((item) => {
    item.addEventListener('click', (event) => {
        document.querySelector("[data-id='package']").classList.toggle('open');
    }, true)
});


// Close the dropdown initially
dropdownRef.classList.remove('open');

checkboxesRefs.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        // Dodaj lub usuń klasę 'hover' w zależności od tego, czy checkbox jest zaznaczony
        checkbox.classList.toggle('hover', checkbox.querySelector('.checkbox__in').checked);
    });
});

export {formRef, selectedRef, dropdownRef, itemsRefs, doAwesomeThings};