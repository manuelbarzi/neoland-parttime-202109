class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')
        super()

        this.state = {
            name: null,
            query: 'hulk',
            vehicleId: null,
            view: 'results',
            city: 'Madrid',
        }
        this.apiKey = 'KT4VXZB23YF5HY2MZA328NVWT' //TODO
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
            return <div className='home'>
                {/* <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>  */}
                <h1 className='home__title'>Hello, {this.state.name} !</h1>

                <Forecast apiKey={this.apiKey} city={this.state.city} />

                <div className='home__nav'>
                    <button className='btn' onClick={() => {
                        delete sessionStorage.token
                        this.props.onLoggedOut()
                    }}>Logout</button>

                    <button className='btn' onClick={() => {
                        this.setState({ view: 'favorites' })
                    }} >Favorites</button>

                    <button className='btn' onClick={() => {

                        this.props.onProfileIn()
                    }}>Profile</button>

                    <button className='btn' onClick={() => {
                        this.setState({ view: 'cart' })
                    }}>Cart</button>
                </div>

                <Search
                    query={this.state.query}
                    onQueryChange={query => this.setState({ query, view: 'results' })}
                />

                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
                />}

                {this.state.view === 'detail' && <Detail
                    itemId={this.state.vehicleId}
                    onReturnClick={() => this.setState({ view: 'results' })}
                />}

                {this.state.view === 'favorites' && <Favorites
                    // onReturnClick={() => this.setState({ view: 'home' })}
                />}

                {this.state.view === 'cart' && <Cart
                    // onReturnClick={() => this.setState({ view: 'home' })}
                />}

            </div>
        else return null
    }
}