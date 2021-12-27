class Results extends React.Component {
    constructor() {
        logger.debug('Results-> constructor')
        super()
        this.state = { vehicles: null }
    }

    componentDidMount() {
        logger.debug('Results -> component did mount')

        try {
            searchVehicles(this.props.query, sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    return alert(error.message)
                }
                favs = user.favs

            }
            )
        }
        catch (error) {
            alert(error.message)
        }
    }
    componentWillReceiveProps(props) {
        logger.debug('Results -> component will receive props')

        try {
            searchVehicles(props.query, sessionStorage.token, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Results-> render')


        if (this.state.vehicles) { //Si existe el array (vehicles distinto de null)
            if (this.state.vehicles.length) //Si hay vehículos(lenght > 0), los pintamos
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>

                        <Fav selected={vehicle.isFav} onClick={() => {
                            try {
                                toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const update = {}

                                    for (const key in vehicle)
                                        update[key] = vehicle[key] //vehicle[key]--accedo al valor al que referencia la propiedad (id, name, etc) del objeto vehicle
                                    //update[key]--en la propiedad id de update(que antes no existia y ahora estoy creando) me referencia el valor de la propiedad id de vehicle
                                    update.isFav = !update.isFav

                                    const vehicles = this.state.vehicles.map(_vehicle => {
                                        if (_vehicle.id === vehicle.id)
                                            return update

                                        return _vehicle
                                    })

                                    this.setState({ vehicles: vehicles })
                                })
                            } catch (error) {
                                alert(error.message)
                            }
                        }} />

                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else //Pero si no hay vehículos: No results
                return <p>No results</p>
        } else
            return null

    }
}