const root = document.getElementById('root') // DOM

const title = <h1>Hola, Mundo!</h1> // Virtual DOM

const list = <ul>
    <li>Mary</li>
    <li>Patty</li>
    <li>Katty</li>
</ul>

ReactDOM.render([title, list], root)

//así es como se escribe y se especifica en el html de este archvio que lo convierta en babel, para que el navegador lo lea