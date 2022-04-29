import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveVehiclesFromCart from '../logic/retrieve-vehicles-from-cart'
import addToCart from '../logic/add-vehicle-to-cart'
import removeFromCart from '../logic/remove-vehicle-from-cart'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'
import './Cart.css'

function Cart({ onReturnClick, onItemClick }) {
    const [vehicles, setVehicles] = useState(null)

    useEffect(() => {
        logger.debug(' Cart -> did mount')
        try {
            retrieveVehiclesFromCart(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                setVehicles(vehicles)
            })

        } catch (error) {
            return alert(error.message)
        }
    }, [])

    const goBack = () => {
        onReturnClick()
    }

    const add = vehicle => {
        try {
            addToCart(vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)

                const update = { ...vehicle, qty: vehicle.qty + 1 }

                let _vehicles = vehicles.map(_vehicle => {
                    if (_vehicle.id === vehicle.id)
                        return update

                    return _vehicle
                })

                setVehicles(_vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const remove = vehicle => {
        try {
            removeFromCart(vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)

                const update = { ...vehicle, qty: vehicle.qty - 1 }

                let _vehicles

                if (update.qty > 0)
                    _vehicles = vehicles.map(_vehicle => {
                        if (_vehicle.id === vehicle.id)
                            return update

                        return _vehicle
                    })
                else
                    _vehicles = vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                setVehicles(_vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const toggle = vehicle => {
        try {
            toggleFavVehicle(vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)

                const update = { ...vehicle, isFav: !vehicle.isFav }

                const _vehicles = vehicles.map(_vehicle => {
                    if (_vehicle.id === vehicle.id)
                        return update

                    return _vehicle
                })

                setVehicles(_vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const goToItem = id => {
        onItemClick(id)
    }

    if (vehicles) {
        if (vehicles.length)
            return <div>
                <button onClick={goBack}>Return to results</button>

                <ul>
                    {vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <button onClick={() => add(vehicle)}>Add to cart</button>
                        <button onClick={() => remove(vehicle)}>Remove from cart</button>
                        <Fav selected={vehicle.isFav} onClick={() => toggle(vehicle)} />
                        <img src={vehicle.image} onClick={() => this.goToItem(vehicle.id)} />
                        <span>{vehicle.qty} x {vehicle.price} $ = </span> <span>{vehicle.qty * vehicle.price} $</span>
                    </li>)}
                </ul>

                <span>TOTAL {vehicles.reduce((accum, vehicle) => accum + vehicle.price * vehicle.qty, 0)} $</span>
                <button>Proceed to checkout</button>
            </div>
        else
            return <p>You do not currently have any items in your shopping cart</p>
    } else
        return null

    // const checkout = () => {this.props.onCheckoutClick() }
}

export default Cart

