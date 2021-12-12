class Results extends React.Component {
    constructor() {

        super()

        this.state = { vehicles: null }
    }

    componentDidMount() {

        try {
            searchVehicles(this.props.query, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    //metodo para recibir props nuevas
    componentWillReceiveProps(props) {

        //recibimos la query por props, de la home
        try {
            searchVehicles(this.props.query, (error, vehicles) => {
                if (error) return alert(error.message)

                this.setState({ vehicles })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {

        if (this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        
                        <Fav selected={vehicle.isFav} onClick={() => {
                        try {
                            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                if (error) return alert(error.message)

                                const update = {} // creamos una constante vacía para guardar los nuevos datos

                                for (const key in vehicle)
                                update[key] = vehicle[key]

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

                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id) }/>
                        <span>{vehicle.price} €</span>
                    </li>)}
                </ul>
            else
                return <p>No results :(</p>
        } else
            return null
            
    }
}