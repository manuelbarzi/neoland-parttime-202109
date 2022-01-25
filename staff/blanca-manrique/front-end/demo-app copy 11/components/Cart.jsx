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

    goBack = () => {this.props.onReturnClick()}

    add =(vehicle) => {
        try {
            addToCart(vehicle.id, sessionStorage.token, error => {
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
    }

    remove =(vehicle) => {
        try {
            removeFromCart(vehicle.id, sessionStorage.token, error => {
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
    }

    toggle =(vehicle) => {
        try {
            toggleFavVehicle(vehicle.id, sessionStorage.token, error => {
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
    }

    goToItem = (id)=> {this.props.onItemClick(id)}

    checkout = () => {this.props.onCheckoutClick() }

    render() {
        logger.debug('Cart -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <button onClick={this.goBack}>Return to results</button>
        
                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <button onClick={()=>this.add(vehicle)}>Add to cart</button>
                            <button onClick={()=>this.remove(vehicle)}>Remove from cart</button>
                            <Fav selected={vehicle.isFav} onClick={()=>this.toggle(vehicle)} />
                            <img src={vehicle.image} onClick={()=>this.goToItem(vehicle.id)}/>
                            <span>{vehicle.qty} x {vehicle.price} $ = </span> <span>{vehicle.qty * vehicle.price} $</span>
                        </li>)}
                    </ul>
                    
                    <span>TOTAL {this.state.vehicles.reduce((accum, vehicle) => accum + vehicle.price * vehicle.qty, 0)} $</span>
                    <button onClick={this.checkout}>Proceed to checkout</button>
                </div>
            else
                return <p>You do not currently have any items in your shopping cart</p>
        } else
            return null
    }
}

