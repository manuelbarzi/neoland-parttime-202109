class Favs extends React.Component{
    constructor() {
        logger.debug('Fav -> constructor')

        super()
        this.state = { vehicles: null }
    }

    ComponentDidMount(){
        logger.debug('Favs -> component did mount')

        try {
            retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
                if(error) return alert (error.message)

                this.setState({ vehicles })
            })
            
        } catch (error) {
            alert(error.message)
            
        }
    }

    render() {
        logger.debug('Favs -> render')

        if(this.state.vehicles){
            if(this.state.vehicles.length)
            
            return <ul>
                {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                    <h2>{vehicle.name}</h2>
                    <Fav selected={vehicle.isFav} onClick={() => {
                        try {
                            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                if(error) return alert(error.message)

                                const vehicles = this.state.vehicles.filter(_vehicle => _vehicle.id !== vehicle.id) //quita el que ya no es favorito

                                this.setState({ vehicles: vehicles})  //setea el estado
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }} />

                    <img src={vehicle.image} onClick={() => this.props.onItemClick(vehicle.id)} />
                    <span>{vehicle.price} $ </span>
                </li>)}
            </ul>
            else 
            return <p>No Favs !! </p>            
        } else
        return null
    }

}