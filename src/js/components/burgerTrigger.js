const burgerTrigger = document.querySelector("div.burgerTrigger");
const burgerMenu = document.querySelector("div.burgerMenu");
const nav = document.querySelector(".navigation");
const list = document.querySelector("ul")

burgerTrigger.addEventListener("click",()=> {
    burgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
    list.classList.toggle("active")
});