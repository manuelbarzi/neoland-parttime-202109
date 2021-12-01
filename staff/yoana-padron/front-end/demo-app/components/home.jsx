class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = { 
            name: null, 
            query: null,
            vehicleId: null,
            view: null  
        }
    }

    componentWillMount() {
        logger.debug('Home -> will mount')
    }

    componentDidMount() {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            this.props.onLoggedOut()
        }
    }

    componentWillUnmount() {
        logger.debug('Home -> will unmount')
    }

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}!</h1>
                <button onClick={() => {
                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }}>Logout</button>

                <Search onQuery ={query => this.setState({query, view:'result'})} />

                {this.state.view === 'results' && <Results query={this.state.query}
                onItemClick={vehicleId => this.setState({vehicleId, view: 'detail'})}/>}

                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId}/>}

                {/* <form onSubmit={event => {
                    event.preventDefault()

                    var query = event.target.query.value

                    try{
                        searchVehicles( query, (error, vehicles) =>{
                            if (error) return alert(error.message)

                            this.setState({vehicles})
                        })
                    } catch(error){
                        alert(error.message)
                    }
                }}>
                    <input type="text" name="query" placeholder="Buscar vehiculos" />
                    <button>Buscar</button>
                </form>

                {!!this.state.vehicles.length && <ul className="flex-list">
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <img src={vehicle.thumbnail} />
                        <h2>{vehicle.name}</h2>
                        <span>{vehicle.price} €</span>
                    </li>)}
                    </ul>} */}

            

            </div>
        else return null
    }
}