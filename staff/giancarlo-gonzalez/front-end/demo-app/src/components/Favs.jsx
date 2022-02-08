import { Component } from 'react'
import logger from '../logger'
import retrieveFavVehicles from '../logic/retrieve-fav-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'

class Favs extends Component {
    constructor() {
        logger.debug('Favs -> constructor')

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug('Favs -> component did mount')

        try {
            retrieveFavVehicles(sessionStorage.token)
                .then(vehicles => this.setState({ vehicles }))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    toggleFav = id => {
        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) return alert(error.message)

                const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== id)

                this.setState({ vehicles: vehicles })

            })
        } catch (error) {
            alert(error.message)
        }
    }

    clickItem = id => this.props.onItemClick(id)

    render() {
        logger.debug('Favs -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => this.toggleFav(vehicle.id)} />
                        <img src={vehicle.image} onClick={() => this.clickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>No favs :(</p>
        } else
            return null

    }
}

export default Favs