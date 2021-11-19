const status_menu = document.querySelector('.statusMenu')
const showMenu = document.querySelector('.menu-show')
const anchor = document.querySelector('a')

status_menu.addEventListener('click',(e) => {
    status_menu.classList.toggle('fa-bars')
    status_menu.classList.toggle('fa-times')
    showMenu.classList.toggle('active')
})
anchor.addEventListener('click',(e)=>{
    e.defaultPrevented
})