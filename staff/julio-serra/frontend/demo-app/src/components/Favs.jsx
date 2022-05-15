import { Component } from "react"
import retrieveFavVehicles from '../logic/retrieve-fav-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'

class Favs extends Component {
    constructor() {
        super()
        this.state = { vehicles: null }
    }

    componentDidMount() {

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)
                this.setState({ vehicles })
            })
        }
        catch (error) {
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

    itemClick = id => this.props.onItemClick(id) 

    render() {
        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => this.toggleFav(vehicle.id)} />
                        <img src={vehicle.image} onClick={() => this.itemClick(vehicle.id)} alt="" />
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