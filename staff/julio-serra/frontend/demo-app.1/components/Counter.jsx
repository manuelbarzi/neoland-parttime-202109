class Counter extends React.Component {
    constructor() {
        super()
        this.state = { counter : 0 }
    }
    render() {
        <button onClick={
            () =>{
                this.setState({ counter: this.state.counter + 1})
            }
        }>Llevas {this.state.counter} clicks</button>
    }
}

ReactDOM.render([
    <Counter />
], document.getElementById('root'))