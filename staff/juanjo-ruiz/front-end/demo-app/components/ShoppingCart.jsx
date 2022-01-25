const { Component } = React

class ShoppingCart extends Component {
    constructor() {

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {
        try {
            retrieveVehiclesFormCart(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    toogleFav = vehicle => {
        try {
            toogleFavVehicle(sessionStorage.token, vehicle.id, error => {
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

    addToCart = vehicle => {
        try {
            addVehicleToCart(sessionStorage.token, vehicle.id, error => {
                if (error) alert(error.message)

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

    removeFromCart = vehicle => {
        try {
            removeVehicleFormCart(sessionStorage.token, vehicle.id, error => {
                if (error) alert(error.message)

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

    goToHome = event => {
        event.preventDefault()

        this.props.onClickedHome()
    }

    render() {

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <p><a href="" onClick={this.goToHome}>Inicio</a></p>
                    <h1>Cesta</h1>
                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <Fav selected={vehicle.isFav} onClick={() => this.toggleFav(vehicle)} />

                            <button onClick={() => this.addToCart(vehicle)}>Add to cart</button>

                            <button onClick={() => this.removeFromCart(vehicle)}>Remove cart</button>

                            <img src={vehicle.image} onClick={() => this.clickItem(vehicle.id)} />
                            <span>{vehicle.qty} x {vehicle.price} $ </span>
                            <hr></hr>
                            <span>Subtotal {vehicle.qty * vehicle.price} $</span>
                        </li>)}
                    </ul>
                    <hr></hr>
                    <span>TOTAL {this.state.vehicles.reduce((accum, vehicle) => accum + vehicle.price * vehicle.qty, 0)} $</span>
                </div>
            else
                return <p>No items :(</p>
        } else
            return null

    }
}