class Favs extends React.Component {
    constructor() {
        logger.debug('Favs -> constructor')

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug('Favs -> component did mount')

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

//Métodos de las clases:

goToToggleFav = id => {
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

goToClickItem = id => this.props.onItemClick(id)


    render() {
        logger.debug('Favs -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => this.goToToggleFav(vehicle.id)} />
                        <img src={vehicle.image} onClick={ () => this.goToClickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>No favs :(</p>
        } else
            return null

    }
}