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

                            <button onClick={() => {
                                try {
                                    addVehicleToCart(vehicle.id, sessionStorage.token, error => {
                                        if (error) return alert(error.message)

                                        const update = { ...vehicle, qty: vehicle.qty + 1 }

                                        const vehicles = this.state.vehicles.map(_vehicle => {
                                            if (_vehicle.id === vehicle.id)
                                                return update

                                            return _vehicle
                                        })

                                        this.setState({ vehicles })
                                    })
                                } catch (error) {
                                    alert(error.message)
                                }
                            }}>Add to cart</button>

                            <button onClick={() => {
                                try {
                                    removeVehicleFromCart(vehicle.id, sessionStorage.token, error => {
                                        if (error) return alert(error.message)

                                        const update = { ...vehicle, qty: vehicle.qty - 1 }

                                        let vehicles

                                        if (update.qty > 0)
                                            vehicles = this.state.vehicles.map(_vehicle => {
                                                if (_vehicle.id === vehicle.id)
                                                    return update

                                                return _vehicle
                                            })
                                        else
                                            vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                                        this.setState({ vehicles })
                                    })
                                } catch (error) {
                                    alert(error.message)
                                }
                            }}>Remove from cart</button>

                            <Fav selected={vehicle.isFav} onClick={() => {
                                try {
                                    toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                        if (error) return alert(error.message)

                                        const update = { ...vehicle, isFav: !vehicle.isFav }

                                        const vehicles = this.state.vehicles.map(_vehicle => {
                                            if (_vehicle.id === vehicle.id)
                                                return update

                                            return _vehicle
                                        })

                                        this.setState({ vehicles })
                                    })
                                } catch (error) {
                                    alert(error.message)
                                }
                            }} />

                            <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)}/>
                            <span>{vehicle.qty} x {vehicle.price} $ = </span> <span>{vehicle.qty * vehicle.price} $</span>

                        </li>)}
                    </ul>
                    <span>TOTAL {this.state.vehicles.reduce((accum, vehicle) => accum + vehicle.price * vehicle.qty, 0)} $</span>
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

