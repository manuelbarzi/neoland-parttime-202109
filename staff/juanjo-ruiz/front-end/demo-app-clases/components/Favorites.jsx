const { Component } = React

class Favorites extends Component {
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

    toogleFav = vehicle => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id)

                this.setState({ vehicles: vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    showDetail = id => this.props.onItemClick(id)

    goToHome = event => {
        event.preventDefault()

        this.props.onClickedHome()
    }

    render() {
        logger.debug('Favs -> render')

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <div>
                    <p><a href="" onClick={this.goToHome}>Inicio</a></p>
                    <h1 className='title-form'>Favoritos</h1>
                    <ul>
                        {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <Fav selected={vehicle.isFav} onClick={() => this.toogleFav(vehicle)} />
                            <img className='img-list' src={vehicle.image} onClick={() => this.showDetail(vehicle.id)} />
                            <span>{vehicle.price} €</span>
                        </li>)}
                    </ul>
                </div>
            else
                return <p className="container feedback-error">No hay favoritos</p>
        } else
            return null
    }
}    