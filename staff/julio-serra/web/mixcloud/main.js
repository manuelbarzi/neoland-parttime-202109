var menuButton = document.querySelector('.header__nav-button')
var menuList = document.querySelector('.header__nav-menu')

menuButton.onclick = function() {
    menuList.classList.toggle('header__nav-menu--on')
}