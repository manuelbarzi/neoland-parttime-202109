class Favorites extends React.Component {
    constructor() {
        super()
        this.state = { vehicles: null }
    }
    componentDidMount() {
        logger.debug(' Favorites -> did mount')
        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })

            })
        } catch (error) {
            return alert(error.message)
        }
    }

    render() {
        logger.debug('Favorites -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => {
                            try {
                                toggleFavVehicle(vehicle.id, sessionStorage.token, error => {
                                    if (error) return alert(error.message)

                                    const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                                    this.setState({ vehicles: vehicles })

                                })
                            } catch (error) {
                                alert(error.message)
                            }
                        }} />
                        <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)}/>
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>You do not currently have any favorite vehicle</p>
        } else
            return null

    }
}

