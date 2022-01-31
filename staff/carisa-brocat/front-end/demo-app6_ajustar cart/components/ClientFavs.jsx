class ClientFavs extends React.Component {
    constructor() {
        super()

        this.state = {
            favsVehicles: null,
        }

    }

    componentDidMount() {
        logger.debug('ClientFavs -> Component did Mount')

        try {
            retrieveFavsVehicles(sessionStorage.token, (error, favsVehicles) => {
                if (error) alert(error.message)

                this.setState({ favsVehicles })
            })

        } catch (error) {
            alert(error.message)
        }
    }

    toggleFav = id => {
        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) return alert(error.message)

                const vehicles = this.state.favsVehicles.filter(_vehicle => _vehicle.id !== id)

                this.setState({ favsVehicles: vehicles })

            })
        } catch (error) {
            alert(error.message)
        }
    }

    clickItem = id => this.props.onItemClick(id)

    addToCart = id => {
        try {
            addCartVehicle(sessionStorage.token, id, error => {
                if (error) return alert(error.message)

                return alert('Car Added successfully')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('ClientFavs -> render')

        if (this.state.favsVehicles) {
            if (this.state.favsVehicles.length) {
                return <ul>
                    {this.state.favsVehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => this.toggleFav(vehicle.id)} />
                        <img src={vehicle.image} onClick={() => this.clickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                        <button onClick={() => this.addToCart(vehicle.id)}
                        >Add to Cart</button>
                    </li>)}
                </ul>
            } else {
                return <p>You dont have selected any favs car yet</p>
            }
        }
        return null
    }
}