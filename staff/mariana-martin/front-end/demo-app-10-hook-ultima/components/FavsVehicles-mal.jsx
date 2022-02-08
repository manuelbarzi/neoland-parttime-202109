class FavsVehicles extends React.Component {

    constructor() {
        super()

        this.state = { favs: null }
    }

    componentDidMount() {
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) return alert(error.message)

                this.setState({ favs }) //favs:favs
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {

        if (this.state.favs) {

            return <div>
              <ul>
                    {this.state.favs.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>

                        <Fav selected={vehicle.isFav} onClick={() => { 

                            try {
                                toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                                    if (error) return alert(error.message)

                                    const update = {}  

                                    for (const key in vehicle)    
                                        update[key] = vehicle[key]  

                                    update.isFav = !update.isFav 
                            

                                    const vehicles = this.state.vehicles.map(_vehicle => {  
                                        if (_vehicle.id === vehicle.id) 
                                            return update 

                                        return _vehicle 
                                    })

                                    this.setState({ favs: vehicles }) 

                                })

                            } catch (error) {
                                alert(error.message)
                            }
                        }} />

                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <span>{vehicle.price} $ </span>

                    </li>)}
                </ul>
            </div>
        } else {
            return <span>No hay Favoritos</span>
        }
    }
} 