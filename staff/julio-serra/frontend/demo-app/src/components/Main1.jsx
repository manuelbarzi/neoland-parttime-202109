// ReactDOM.render([
//     <App /> // new App
// ], document.getElementById('root'))

// const root = document.getElementById('root')

// const title = <h1>Hola, mundo</h1>

// const paragraph = <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt ipsum consequatur?</p>

// ReactDOM.render([title, paragraph], root)


// function Titleh1 (props) {
//     return <h1>Hola, {props.names}</h1>
// }

// function Titleh2 (props){
//     return <h2> Esto es un h2, {props.surname}</h2>
// }

// ReactDOM.render ([
//     <Titleh1 names = 'Yoana' />,
//     <Titleh1 names = 'Raquel' />,
//     <Titleh2 surname = 'Julio' />

// ], document.getElementById('root'))

class Counter extends React.Component {
    constructor(){
        super()

        this.state = { counter : 0 }
    }

    render(){
        return <div className="main">
            <button className="main__button" onClick={() =>{
            this.setState({ counter: this.state.counter + 1})
        }}>Llevas {this.state.counter} clicks</button>
        <p className="main__paragraph"><span className="main__span"></span></p>
        <button className="main__button main__button--reset" onClick={() =>{
            this.setState({ counter: 0})
        }}>Reset</button>
        </div>
    }
}

ReactDOM.render([
    <Counter />
], document.getElementById('root'))