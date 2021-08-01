// variables 
let navBtn = document.querySelector('.navbar__btn');
let navbarList = document.querySelector('.navbar__list');
// end of variables 

navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navBtn.classList.toggle('navbar__close');
    navbarList.classList.toggle('navbar--active');
})