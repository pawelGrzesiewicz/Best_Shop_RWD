const btnRefs = document.querySelectorAll('.frame__btn');
const calcRef = document.querySelector('.calc');


btnRefs.forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        console.log(btn);

        calcRef.classList.add('calc--active');
    });
});
