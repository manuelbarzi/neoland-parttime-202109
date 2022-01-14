class ShoppingCart extends React.Component {
    constructor() {

        super()

        this.state = { cart: [] }
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <p><a href="" onClick={event =>{
                event.preventDefault()

                this.props.onClickedHome()
            }}>Inicio</a></p>
            <h1>Cesta</h1>
        </div>
    }
}