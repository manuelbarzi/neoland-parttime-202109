import { Component } from 'react'
import retrieveVehicle from '../logic/retrieve-vehicle'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import addVehiclesToCart from '../logic/add-vehicles-to-cart'
import Fav from './Fav'


class Detail extends Component {
    constructor() {

        super()

        this.state = { vehicle: null }
    }

    componentDidMount() {

        try {
            retrieveVehicle(sessionStorage.token, this.props.itemId, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    toggleFav = () => {
        try {
            toggleFavVehicle(sessionStorage.token, this.state.vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in this.state.vehicle)
                    update[key] = this.state.vehicle[key]

                update.isFav = !update.isFav

                this.setState({ vehicle: update })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    addToCart = () => { // arrow functions
        try {
            addVehiclesToCart(sessionStorage.token, this.state.vehicle.id) 
            .catch(error => alert(error.message))
            
        } catch (error) {
            alert(error.message)
        }
    }

    render() {

        if (this.state.vehicle)
            return <div>
                <h2>{this.state.vehicle.name}</h2>
                <Fav selected={this.state.vehicle.isFav} onClick={this.toggleFav} />
                <button onClick={this.addToCart}>Add to Cart</button>
                <img src={this.state.vehicle.image} alt="" />
                <p>{this.state.vehicle.description}</p>
                <p>{this.state.vehicle.price} $</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <p>{this.state.vehicle.year}</p>
                <a href={this.state.vehicle.url}>original item</a>
            </div>
        else
            return null
    }
}

export default Detail