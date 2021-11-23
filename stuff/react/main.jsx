const root = document.getElementById('root') // => DOM

const title = <h1>Hola, mundo !</h1> // => Virtual DOM

const paragraph = <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat fugit porro molestias atque delectus, impedit suscipit voluptas culpa necessitatibus inventore rem reprehenderit sit? Porro voluptatem ipsa quas odit minus recusandae sequi nostrum ex laboriosam quos!</p>

ReactDOM.render([title, paragraph], root) // => Renderizarlo en el DOM, pintarlo

