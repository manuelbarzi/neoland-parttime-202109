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

    render() {
        logger.debug('Favs -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => {
                            try {
                                toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                                    this.setState({ vehicles: vehicles })

                                })
                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                        <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>No favs :(</p>
        } else
            return null

    }
}