var menuButton = document.querySelector('.menu__button')
var menuList = document.querySelector('.menu__list')

menuButton.onclick = function() {
    menuList.classList.toggle('menu__list--on')
}