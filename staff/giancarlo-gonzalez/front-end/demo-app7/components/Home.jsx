class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            name: null,
            city: null,
            query: null,
            // query: 'hulk',
            vehicleId: null,
            view: null
            // view: 'results'
        }

        this.apiKey = '73KP3CVXGQF33DT6QHF9JVD7B'
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

                    return
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
        logger.debug('Home -> will unmount')
    }

    showFavs = () => {
        this.setState({ view: 'favs' })
    }

    showCart = () => {
        this.setState({ view: 'cart' })
    }

    logout = () => {
        delete sessionStorage.token

        this.props.onLoggedOut()
    }

    checkout = () => { 
        this.setState({view:'check-out'})
    }

    showResults = query => this.setState({ query, view: 'results' })

    showDetail = vehicleId => this.setState({ vehicleId, view: 'detail' })

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return 
                <h1>Hello, {this.state.name}!</h1>

                <button onClick={this.showFavs}>Favs</button>

                <button onClick={this.showCart}>Cart</button>

                <button onClick={this.logout}>Logout</button>

                <button onItemClick={this.checkout}>Checkout</button>

                {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

                <Search query={this.state.query} onQueryChange={this.showResults} />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={this.showDetail}
                />}

                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}

                {this.state.view === 'favs' && <Favs onItemClick={this.showDetail} />}

                {this.state.view === 'cart' && <Cart onItemClick={this.showDetail} />}

                {this.state.view == 'check-out' && <CheckOut onItemClick={this.}}
            
        else return null
}