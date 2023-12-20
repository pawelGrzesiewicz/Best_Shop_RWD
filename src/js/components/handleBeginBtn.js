let btnValue;

function setupButtonClick() {
    const btnRefs = document.querySelectorAll('.frame__btn');
    const calcRef = document.querySelector('.calc');

    btnRefs.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();

            // Assign the value attribute from the clicked button to the outer btnValue variable
            btnValue = btn.getAttribute('value');

            // Log the value to the console
            console.log('Button Value:', btnValue);

            // Add 'calc--active' class to the calc element
            calcRef.classList.add('calc--active');
        });
    });
}

export { setupButtonClick, btnValue };