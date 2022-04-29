class Detail extends React.Component {
    constructor() {
        logger.debug('Detail-> constructor')
        super()
        this.state = { vehicle: null }
    }

    componentDidMount() {
        logger.debug('Detail-> component did mount')

        try {
            retrieveVehicle(this.props.itemId, sessionStorage.token, (error, vehicle) => {
                if (error) return alert(error.message)

                this.setState({ vehicle })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    goBack =() => {this.props.onReturnClick()}

    toggle =() => {
        try {
            toggleFavVehicle(this.state.vehicle.id, sessionStorage.token, error => {
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

    add = () => {
        try {
            addToCart(this.state.vehicle.id, sessionStorage.token, error => {
                if (error) return alert(error.message)
                //TODO feedback para que el usuario se entere de que el coche se ha añadido al carrito
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    render() {
        logger.debug('Detail-> render')

        if (this.state.vehicle)
            return <div>
                <button onClick={this.goBack}>Return to results</button>
                <h2>{this.state.vehicle.name}</h2>
                <Fav selected={this.state.vehicle.isFav} onClick={this.toggle} /> 
                <button onClick={this.add}>Add to Cart</button>
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