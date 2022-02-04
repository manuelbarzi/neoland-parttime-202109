const { render } = ReactDOM
const { BrowserRouter } = ReactRouterDOM

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

function App() {
    return <>
        <h1>React Router DOM DEMO</h1>
        
        <Counter />
    </>
}

render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'))