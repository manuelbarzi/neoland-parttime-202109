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

    loggedOut = () => {
        delete sessionStorage.token

        this.props.onLoggedOut()
    }

    showClientFavs = () => this.setState({ view: 'clientFavs' })

    showCart = () => this.setState({ view: 'cart' })

    showResults = query => this.setState({ query, view: 'results' })

    showDetails = vehicleId => this.setState({ vehicleId, view: 'detail' })


    render() {
        logger.debug('Home -> Render')
        if (this.state.name) {
            return <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.loggedOut}>Logout</button>

                <button
                    onClick={this.showClientFavs}
                >Favs</button>

                <button
                    onClick={this.showCart}
                >Cart</button>

                {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

                <Search onQuery={this.showResults} />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={this.showDetails}
                />}

                {this.state.view === 'detail' && <Detail
                    itemId={this.state.vehicleId}
                />}

                {this.state.view === 'clientFavs' && <ClientFavs 
                onItemClick={this.showDetails}/>}

                {this.state.view === 'cart' && <Cart
                onItemClick={this.showDetails}/>}

            </div>
        }
        else {
            return null
        }


    }
}