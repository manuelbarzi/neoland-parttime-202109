class Cart extends React.Component {
    constructor() {
        super()
        this.state = { cart: null }
    }

    componentDidMount() {
        logger.debug(' Cart -> did mount')
        try {
            retrieveVehiclesCart(sessionStorage.token, (error, cart) => {
                if (error) return alert(error.message)

                this.setState({ cart })
            })

        } catch (error) {
            return alert(error.message)
        }
    }
    render() {
        return <div>
            <h1>Cart</h1>
            <button onClick={(event) => {
                event.preventDefault()
                this.props.onReturnClick()
            }}>Go back</button>
            <ul>
                {this.state.cart ? this.state.cart.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <img src={vehicle.image} />
                    <p>{vehicle.price} $</p>
                </li>) : <p>You do not currently have any items in your shopping cart</p>}
            </ul>
        </div>
    }
}
