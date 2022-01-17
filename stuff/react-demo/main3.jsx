const root = document.getElementById('root') // DOM

const title = <h1>Hola, Mundo!</h1> // Virtual DOM

const list = <ul>
    <li>Mary</li>
    <li>Patty</li>
    <li>Katty</li>
</ul>
//1er componenete
function Hello(props) { //receive an object,porque recibe props
    return <h1 className='title '>Hello, {props.name} ! </h1>
}
//compo de botón:
//- le paso por medio de props, enviarmeos el texto del botón (el que irán en el) por pros
//se pone el callback, directamente en la etiqueta del botón. callback, que vamos a recibir por props
function CoolButton(props) {    
    return <button className='cool-button' onClick={props.onClicked}> {props.text} </button>
}

//cuando llame al compo le paso las props personalizadas ahí, aqui le paso las props.
ReactDOM.render([
    title, 
    list, 
    <Hello name='Pepito'/>, 
    <CoolButton text='press me' onClicked={ function() {  //le envío este callback por props y el texto tambien es otra prop
        alert('hola mundo')
    }}/>,
    //puedo tener otro botón cambiando text:
    <CoolButton text='press me again' onClicked={ function() {  
        alert('hello')
    }}/>
], root)

