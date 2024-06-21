
const menu = document.getElementById("menu");
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.close-btn');
menu.addEventListener('click', (e) => {
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
})
closeMenu.addEventListener('click', (e) => {
    sideMenu.classList.remove('active');
    document.body.style.overflow = 'scroll';
})
