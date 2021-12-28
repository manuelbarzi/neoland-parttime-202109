class Favorites extends React.Component {
    constructor() {

        super()

        this.state = { favs: null }
    }

    componentDidMount() {
        try {
            retrieveFavVehicles(sessionStorage.token, (error, favs) => {
                if (error) return alert(error.message)
                
                this.setState({ favs })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        return <div>
            <h2>Favoritos</h2>
            <ul>
                {this.state.favs ? this.state.favs.map(vehicle => <li key={vehicle.id}>
                    <p>{vehicle}</p>

                </li>) : null}
            </ul>
        </div>
    }
}