class Cart extends React.Component {
    constructor() {
        super()
        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug(' Cart -> did mount')
        try {
            retrieveVehiclesCart(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })

        } catch (error) {
            return alert(error.message)
        }
    }
    render() {
        return <div>
            <h1>Cart</h1>
            <button onClick={() => {
                this.props.onReturnClick()
            }}>Go back</button>

            {this.state.vehicles? <div><ul>
                {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <img src={vehicle.image} />
                    <p>{vehicle.price} $</p>
                    <button onClick={() => {
                        this.props.onAddClick()
                    }}>Add</button>
                    <button onClick={() => {
                        this.props.onRemoveClick()
                    }}>Remove</button>
                    </li>
                )}
            </ul>
                <button onClick={(event) => {
                    event.preventDefault()
                    this.props.onCheckoutClick()
                }}>Proceed to checkout</button>
            </div>
                : <p>You do not currently have any items in your shopping cart</p>
            }
        </div>
    }
}
