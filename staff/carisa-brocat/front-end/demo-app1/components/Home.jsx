class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')
        super()

        this.state = {
            name: null,
            vehicles: [],
            feedback: null
        }
    }
    componentWillMount() {
        logger.debug('Home -> Will Mount')
    }

    componentDidMount() {
        logger.debug('Home->Did Mount')

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
        logger.debug('Home-> Will onMount')
    }

    render() {
        logger.debug('Home->Render')

        if (this.state.name) {
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}</h1>
                <button onClick={() => {
                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }}>Logout</button>

                <form onSubmit={event => {
                    event.preventDefault()

                    var query = event.target.query.value

                    try {
                        searchVehicles(query, (error, vehicles) => {
                            if (error) {
                                this.setState({ feedback: error.message })
                                
                            }
                            else {
                                this.setState({ vehicles })
                                
                                if (this.state.vehicles.length === 0) {
                                    this.setState({ feedback: 'No results found. Try again!' })
                                }
                            }
                        })
                    } catch (error) {
                        this.setState({ feedback: error.message })
                    }
                }}>
                    <input type='text' name='query' placeholder='Example: "Blue"' />
                    <button>Search</button>
                </form>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}

                {!!this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle =>
                        <li key={vehicle.id}>
                            <h2>{vehicle.name}</h2>
                            <img src={vehicle.thumbnail} />
                            <span>{vehicle.price} $</span>
                        </li>)}
                </ul>}
            </div>
        }
        else {
            return null
        }
    }
}