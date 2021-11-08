const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const aboutMenu = document.querySelector('.nav-underline-about');
const contactMenu = document.querySelector('.nav-underline-contact');



openMenu.addEventListener('click', show);
aboutMenu.addEventListener('click', close);
closeMenu.addEventListener('click', close);
contactMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}