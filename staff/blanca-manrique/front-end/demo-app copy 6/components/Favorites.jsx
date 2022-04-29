class Favorites extends React.Component {
    constructor() {
        super()
        this.state = { favs: [] }
    }

    componentDidMount() {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    return alert(error.message)
                }
                favs = user.favs
                this.setState({ favs })

            }
            )
        }
        catch (error) {
            alert(error.message)
        }
    }
    render() {
        return <div>
            <h2>Favorites</h2>
            <ul>
                {this.state.favs? this.state.favs.map(vehicle => <li key={vehicle.id}>
                    <p>{vehicle}</p>
                 
            </li>): null}   
            </ul>
        </div>
    }
}