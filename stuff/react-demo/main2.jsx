const root = document.getElementById('root') // DOM

const title = <h1>Hola, Mundo!</h1> // Virtual DOM

const list = <ul>
    <li>Mary</li>
    <li>Patty</li>
    <li>Katty</li>
</ul>
//1er componenete
function Hello(props) {
    return <h1 className='title '>Hello, {props.name} ! </h1>
}
                        //aquí llamo al componente Hello
ReactDOM.render([title, list, <Hello name='Pepito'/>], root)

