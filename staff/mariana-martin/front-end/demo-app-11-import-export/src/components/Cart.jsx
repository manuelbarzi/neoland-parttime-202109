import { Component } from 'react'
import logger from '../logger'
import retrieveVehiclesFromCart from '../logic/retrieve-vehicles-from-cart'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import addVehicleToCart from '../logic/add-vehicle-to-cart'
import removeVehicleFromCart from '../logic/remove-vehicle-from-cart'
import Fav from './Fav'

class Cart extends Component {
    constructor() {
        logger.debug('Cart -> constructor')

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug('Cart -> component did mount')

        try {
            retrieveVehiclesFromCart(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }
    //Métodos de las clases: 
    goToToggleFav = vehicle => {
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
    }

    goToAddToCart = vehicle => {
        try {
            addVehicleToCart(sessionStorage.token, vehicle.id, error => {
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

    goToRemoveFromCart = vehicle => {
        try {
            removeVehicleFromCart(sessionStorage.token, vehicle.id, error => {
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


    goToItemClick = id => this.props.onItemClick(id)


    render() {
        logger.debug('Cart --> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <Fav selected={vehicle.isFav} onClick={() => this.goToToggleFav(vehicle)} />

                            <button onClick={() => this.goToAddToCart(vehicle)}>Add to cart</button>

                            <button onClick={() => this.goToRemoveFromCart(vehicle)}>Remove cart</button>

                            <img src={vehicle.image} onClick={() => this.goToItemClick(vehicle.id)} />
                            <span>{vehicle.qty} x {vehicle.price} $ </span>
                            <hr></hr>
                            <span>Subtotal {vehicle.qty * vehicle.price} $ </span>
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

export default Cart