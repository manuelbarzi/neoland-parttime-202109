class Cart extends React.Component {
    constructor() {
        logger.debug('Cart -> constructor')

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug('Cart -> component did mount')

        try {
            retrieveCartVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Cart -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <AddToCart selected={vehicle.isAdded} onClick={() => {
                            try {
                                toggleCartVehicle(sessionStorage.token, vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                                    this.setState({ vehicles: vehicles })

                                })
                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                        <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} €</span>
                    </li>)}
                </ul>
            else
                return <p>No items in cart :(</p>
        } else
            return null

    }
}