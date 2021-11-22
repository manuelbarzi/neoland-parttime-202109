var input = document.querySelector('input')
var button = document.querySelector('button')

button.onclick = function () {
    if (button.innerText === 'show') {
        input.type = 'text'
        button.innerText = 'hide'
    } else {
        input.type = 'password'
        button.innerText = 'show'
    }
}