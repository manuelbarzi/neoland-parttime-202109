class Cart extends React.Component {
    constructor() {
        super()
        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug(' Cart -> did mount')
        try {
            retrieveVehiclesFromCart(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })

        } catch (error) {
            return alert(error.message)
        }
    }

    render() {
        logger.debug('Cart -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <img src={vehicle.image} />
                            <p>{vehicle.price} $</p>
                            <button onClick={() => {
                                this.props.onAddClick()
                            }}>Add</button>
                            <button onClick={() => {
                                try {
                                    removeFromCart(vehicle.id, sessionStorage.token, (error, vehicles)=>{
                                        if(error) return alert(error.message)
                                        this.setState({vehicles})
                                    } )
                                } catch (error) {
                                    return alert(error.message)
                                }
                            }}>Remove</button>
                        </li>)}
                    </ul>
                    <button onClick={() => {
                        this.props.onCheckoutClick()
                    }}>Proceed to checkout</button>
                </div>
            else
                return <p>You do not currently have any items in your shopping cart</p>
        } else
            return null
    }
}

