class Favorites extends React.Component {
    constructor() {
        super()
        this.state = { favs: null }
    }
    componentDidMount() {
        logger.debug(' Favorites -> did mount')
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) return alert(error.message)

                this.setState({ favs })

            })
        } catch (error) {
            return alert(error.message)
        }
    }

    render() {
        return <div>
            <h1>My favorites</h1>
            <button onClick={(event)=>{
                event.preventDefault()
                this.props.onReturnClick()
            }}>Go back</button>
            <ul>
                {this.state.favs ? this.state.favs.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <Fav selected={vehicle.isFav} onClick={() => {
                            try {
                                toggleFavVehicle(vehicle.id, sessionStorage.token, error => {
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
                    <img src={vehicle.image} />
                    <p>{vehicle.description}</p>
                    <p>{vehicle.price} $</p>
                    <p>{vehicle.color}</p>
                    <p>{vehicle.style}</p>
                    <p>{vehicle.year}</p>
                    <a href={vehicle.url}>original item</a>
                </li>) : null}
            </ul>
        </div>
    }
}