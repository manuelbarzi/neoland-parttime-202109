var moon = document.querySelector('span')
var space = document.querySelector('body')
var title = document.querySelector('h1')


moon.onclick = function () {
    if (moon.innerText === '🌑') {

        moon.innerText = '🌕️';
        space.classList.remove('panel--dark');
        space.classList.add('panel--light');
        title.classList.remove('panel--light');
        title.classList.add('panel--dark');
    }
    else {
        moon.innerText = '🌑';
        space.classList.remove('panel--light');
        space.classList.add('panel--dark');
        title.classList.remove('panel--dark');
        title.classList.add('panel--light');
    }
}

var menuButton = document.querySelector('.menu__button')
var menuList = document.querySelector('.menu__list')

menuButton.onclick = function () {
    menuList.classList.toggle('menu__list--on')
}

