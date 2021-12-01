class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = { name: null, vehicles: {}
    }

    }
    componentWillMount() {
        logger.debug('Home-> will mount')
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
        logger.debug('Home -> Will Unmount')
    }

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}!</h1>
                <button onClick={event => {
                    event.preventDefault()
                    this.props.onModified()

                }}>Modify Username</button>


                <button onClick={() => {
                    delete sessionStorage.token
                    this.props.onLoggedOut()

                }}>Logout</button>

                <form onSubmit={event => {
                    event.preventDefault()
                    var query = event.target.query.value

                    try {
                        searchVehicles(query, (error, vehicles) => {
                            if (error) return alert(error.message)
                            this.setState({ vehicles })
                        })

                    }
                    catch (error) {
                        alert(error.message)

                    }
                }}>
                    <input type='text' name='query' placeholder='criteria' />


                    <button> Search</button>
                </form>
                {!!this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id} >
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} />
                        <span>{vehicle.price} €</span>
                    </li>)}

                </ul>
                }

            </div>

        else return null
    }
}