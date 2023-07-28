const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-mobile');


menu.addEventListener('click', () => {
    nav.classList.toggle('disp')
})

const main = document.querySelector('#nav-main');

main.addEventListener('click', () => {
    
    return window.scrollBy(0, 2240)
})


const mainMob = document.querySelector('#nav-main-mobile');

mainMob.addEventListener('click', () => {
    
    return window.scrollBy(0, 3100)
})

