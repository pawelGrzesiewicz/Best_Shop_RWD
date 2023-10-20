const formRefs = document.querySelector('.calc__form');
const itemRefs = document.querySelectorAll('.list__item');

formRefs.addEventListener("input", (event) => {
    const target = event.target;
    const products = document.querySelector('[data-id="products"]');
    const orders = document.querySelector('[data-id="orders"]');
    const accounting = document.querySelector('[data-id="accounting"]');
    const terminal = document.querySelector('[data-id="terminal"]');

    if (target.id === 'products') {
        products.classList.add('open');
        const value = parseFloat(target.value) || 0;
        const price = value * 0.5;
        products.querySelector('.item__calc').textContent = `${value} * $0.5`;
        products.querySelector('.item__price').textContent = `$${price}`;
    } else if (target.id === 'orders') {
        orders.classList.add('open');
        const value = parseFloat(target.value) || 0;
        const price = value * 0.5;
        orders.querySelector('.item__calc').textContent = `${value} * $0.5`;
        orders.querySelector('.item__price').textContent = `$${price}`;
    } else if (target.id === 'accounting') {
        accounting.classList.toggle('open');
    } else if (target.id === 'terminal') {
        terminal.classList.toggle('open');
    }
});