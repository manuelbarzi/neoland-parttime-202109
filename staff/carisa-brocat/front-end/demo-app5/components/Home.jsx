class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            name: null,
            query: null,
            city: null,
            vehicleId: null,
            view: null
        }
        this.apiKey = '73KP3CVXGQF33DT6QHF9JVD7B'
    }

    componentWillMount() {
        logger.debug('Home -> Will Mount')
    }

    componentDidMount() {
        logger.debug('Home -> Did Mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }

                this.setState({ name: user.name, city: user.city })

            })

        } catch (error) {
            alert(error.message)
            delete sessionStorage.token

            this.props.onLoggedOut()
        }
    }

    componentWillUnmount() {
        logger.debug('Home -> Will unmount')
    }

    render() {
        logger.debug('Home -> Render')

        if (this.state.name) {
            return <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={() => {
                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }}>Logout</button>

                <button
                    onClick={() => this.setState({ view: 'clientFavs' })}
                >Favs</button>

                <button
                    onClick={() => this.setState({ view: 'cart' })}
                >Cart</button>

                {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

                <Search onQuery={query => this.setState({ query, view: 'results' })} />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
                />}

                {this.state.view === 'detail' && <Detail
                    itemId={this.state.vehicleId}
                />}

                {this.state.view === 'clientFavs' && <ClientFavs 
                onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}/>}

                {this.state.view === 'cart' && <Cart
                onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}/>}

            </div>
        }
        else {
            return null
        }


    }
}