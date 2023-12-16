const formRefs = document.querySelector('.calc__form');
const selectRef = document.getElementById('package');
const dropdownRef = document.querySelector('.calc__select');
const itemsRefs = document.querySelectorAll('.select__dropdown li');

console.log(dropdownRef);


function doAwesomeThings(items, target) {
    items.classList.add('open');
    const value = parseFloat(target.value) || 0;
    const price = value * 0.5;
    items.querySelector('.item__calc').textContent = `${value} * $0.5`;
    items.querySelector('.item__price').textContent = `$${price}`;
}

formRefs.addEventListener("input", (event) => {
    const target = event.target;
    const products = document.querySelector('[data-id="products"]');
    const orders = document.querySelector('[data-id="orders"]');
    const accounting = document.querySelector('[data-id="accounting"]');
    const terminal = document.querySelector('[data-id="terminal"]');

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

selectRef.addEventListener('click', () => {
    dropdownRef.classList.toggle('open');
    console.log(dropdownRef)

}, false);

itemsRefs.forEach((item) => {

    item.addEventListener('click', (event) => {
        document.querySelector("[data-id='package']").classList.toggle('open');

    }, true)
})