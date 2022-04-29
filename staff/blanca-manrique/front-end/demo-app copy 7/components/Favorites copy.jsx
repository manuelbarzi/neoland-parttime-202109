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
        return <div>
            <h1>My favorites</h1>
            <button onClick={() => {
                this.props.onReturnClick()
            }}>Go back</button>

            {this.state.vehicles? <ul>
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
                    <img src={vehicle.image} />
                    <p>{vehicle.description}</p>
                    <p>{vehicle.price} $</p>
                    <p>{vehicle.color}</p>
                    <p>{vehicle.style}</p>
                    <p>{vehicle.year}</p>
                    <a href={vehicle.url}>original item</a>
                </li>
                )}
            </ul>
                :<p>You do not currently have any favorite vehicle</p>
                }
        </div>
    }
}

