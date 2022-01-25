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

    goBack =() => {this.props.onReturnClick()}

    toggle =(id) => {
        try {
            toggleFavVehicle(id, sessionStorage.token, error => {
                if (error) return alert(error.message)

                const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== id)

                this.setState({ vehicles: vehicles })

            })
        } catch (error) {
            alert(error.message)
        }
    }

    goToItem = (id)=> {this.props.onItemClick(id)}
    
    render() {
        logger.debug('Favorites -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <button onClick={this.goBack}>Return to results</button>

                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <Fav selected={vehicle.isFav} onClick={()=>this.toggle(vehicle.id)} />
                            <img src={vehicle.image} onClick={()=>this.goToItem(vehicle.id)}/>
                            <span>{vehicle.price} $</span>
                        </li>)}
                    </ul>

                </div>
            else
                return <p>You do not currently have any favorite vehicle</p>
        } else
            return null

    }
}

