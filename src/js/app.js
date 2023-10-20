const formRefs = document.querySelectorAll('.calc__form');

console.log(formRefs)

formRefs.forEach((ref) => {
    ref.addEventListener('click', (event) => {
        event.target.classList = '#products'
    })
})
