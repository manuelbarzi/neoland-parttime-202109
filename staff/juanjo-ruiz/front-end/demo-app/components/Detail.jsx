const { Componet } = React

class Detail extends Component {
    constructor() {
        logger.debug('Detail -> constructor')

        super()

        this.state = { vehicle: null }
    }

    componentDidMount() {
        logger.debug('Detail -> component did mount')

        try {
            retrieveVehicle(sessionStorage.token, this.props.itemId, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle })
            })
        } catch (error) {
            return alert(error.message)
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

    render() {
        logger.debug('Detail -> render')

        if (this.state.vehicle)
            return <div>
                <h2>{this.state.vehicle.name}</h2>
                <Cart />
                <Fav selected={this.state.vehicle.isFav} onClick={this.toggleFav} />
                <img src={this.state.vehicle.image} />
                <p>{this.state.vehicle.description}</p>
                <p>{this.state.vehicle.price}</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <p>{this.state.vehicle.year}</p>
                <a href={this.state.vehicle.url}>original item</a>
            </div>
        else
            return null
    }
}