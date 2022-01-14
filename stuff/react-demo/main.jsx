//componente de clase que tiene estado  (osea propiedades)
//contruye un compo tipo clase

class Counter extends React.Component {
    constructor() {
        super() //llama al contructo padre

        this.state = { count: 0 } //define el estado, empeiza desde 0, state es objeto con valores
    } 

    render() {  //método render, pintar:
        return <button onClick={() => {  //callback, setState para cambiar estado en la etiqueta del botón
            this.setState({ count: this.state.count + 1 })
        }}> {this.state.count} </button>  //dentro del botón ponemos el state
    }
}

ReactDOM.render([
    <Counter /> // new Counter
], document.getElementById('root'))
