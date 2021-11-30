class Home extends React.Component {
    constructor() {
        super()
        //ponemos el nombre a null
        this.state = {
            name: null,
            vehicles: []
        }
    }

    componentDidMount() {
        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error)
                    return alert(error.message)

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)


        }

    }
    //lo pintamos

    render() {
        if (this.state.name)
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}</h1>
                <button onClick={() => {
                    delete sessionStorage.token // borramos la cookie de la contraseña para que vuelva a 0

                    this.props.logOut()    //añadimos el prop creado en la App
                }}>Log Out</button>
                <form onSubmit={event => {
                    event.preventDefault()

                    var query = event.target.query.value

                    try {
                        searchVehicles(query, (error, vehicles) => {
                            if (error) return alert(error.message)
                            this.setState({ vehicles })
                        })
                    } catch (error) {
                        alert(error.message)
                    }

                }}>
                    <input type="text" name="query" placeholder="Encuentra tu coche" />
                    <button>Search</button>
                </form>
                {!!this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} />
                        <span>{vehicle.price} €</span>
                    </li>)}
                </ul>
                }

                {!this.state.vehicles.length && <h1>somos unos fuckers</h1>}


            </div>
        else return null
    }

}