class Detail extends React.Component {
    constructor() {
        logger.debug('Detail -> constructor')

        super()

        this.state = {
            vehicle: null,
            feedback: null
        }
    }

    componentDidMount() {
        logger.debug('Detail -> component did mount')

        try {
            retrieveVehicle(sessionStorage.token, this.props.itemId, (error, vehicle) => {
                if (error) {
                    return this.setState = ({ feedback: error.message })
                }
                else {
                    this.setState({ vehicle })
                }
            })

        }
        catch (error) {
            this.setState = ({ feedback: error.message })
        }
    }

    toggleFav = () => {
        try {
            toggleFavVehicle(sessionStorage.token, this.state.vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in this.state.vehicle) {

                    update[key] = this.state.vehicle[key]
                }

                update.isFav = !update.isFav

                this.setState({ vehicle: update })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    addToCart = () => {
        try {
            addCartVehicle(sessionStorage.token, this.state.vehicle.id, error => {
                if (error) return alert(error.message)

                return alert('Car Added successfully')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Detail -> render')

        if (this.state.vehicle) {
            return <div>
                <h2>{this.state.vehicle.name}</h2>
                <Fav selected={this.state.vehicle.isFav} onClick={this.toggleFav} />
                <img src={this.state.vehicle.image} />
                <p>{this.state.vehicle.descripction}</p>
                <p>{this.state.vehicle.year}</p>
                <p>{this.state.vehicle.price} $</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <a href={this.state.vehicle.url}>original link</a>
                <button onClick={this.addToCart}
                >Add to Cart</button>
            </div>
        }
        else {
            return null
        }
    }
}