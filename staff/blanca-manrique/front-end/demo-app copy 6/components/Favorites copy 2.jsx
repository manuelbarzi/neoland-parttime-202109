class Favorites extends React.Component {

    constructor() {

        super()

        this.state = { favs: [] }
    }
    componentDidMount() {
        logger.debug(' Favorites -> did mount')

        try {

            var favVehicles = []
            retrieveFavsVehicles(sessionStorage.token, (error, favs_) => {
                if (error) {
                    return alert('error en retrieveFavsVehicles')
                }
                else
                    favs_ instanceof Array ? null : favVehicles.push(favs_)

                this.setState({ favs: favVehicles })

            })

        } catch (error) {
            return alert('error en retrieveFavsVehicles')
        }

    }

    render() {

        return <div className="favorites-container">

            <h3>My favorites</h3>
            <ul className="favorites-list">

                {this.state.favs.map(vehicle =>


                    <li className="favorites-item" key={vehicle.id}>
                        <img src={vehicle.image} />
                        <h4>{vehicle.name}</h4>
                        <p>{vehicle.description}</p>
                        <p>{vehicle.price} $</p>
                        <p>{vehicle.color}</p>
                        <p>{vehicle.style}</p>
                        <p>{vehicle.year}</p>
                        <a href={vehicle.url}>original item</a>
                    </li>


                )}
            </ul>
        </div>
    }


}