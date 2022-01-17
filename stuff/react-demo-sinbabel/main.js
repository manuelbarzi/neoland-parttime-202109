var root = document.getElementById('root') // DOM

var title = React.createElement('h1', null, 'hola mundo') // Virtual DOM react  (se hará el html se puede ver en elements en consola)
                    //creamos una lista con createElement, primero creas li 
var item1 = React.createElement('li', null, 'Mary')  //null es para enviar propiedades al elemento
var item2 = React.createElement('li', null, 'Patty')
var item3 = React.createElement('li', null, 'Katty')

                            //crea un ul, con todos esos items (que son li)
var list = React.createElement('ul', null, item1, item2, item3) 

ReactDOM.render([title, list], root)

//esto es como react funciona por dentro, esto no se usa en la vida real. 
//si no que se usa BABEL (transpirador de código)