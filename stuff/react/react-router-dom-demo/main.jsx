class Counter extends React.Component {
    constructor() {
        super()

        this.state = { count: 0 }
    }

    render() {
        return <button onClick={() => {
            this.setState({ count: this.state.count + 1 })
        }}>{this.state.count}</button>
    }
}

ReactDOM.render([
    <Counter /> // new Counter
], document.getElementById('root'))