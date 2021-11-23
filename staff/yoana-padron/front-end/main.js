var title = React.createElement('h1', null, 'Hola Mundo') //DOM
var root = document.getElementById('root') //Virtual DOM

var item1 = React.createElement('li', null ,'Mary')
var item2 = React.createElement('li', null ,'Patty')
var item3 = React.createElement('li', null ,'Katty')

var list = React.createElement('ul', null, item1, item2, item3)

ReactDOM.render([title, list], root)